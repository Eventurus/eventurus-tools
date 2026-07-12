#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
EVT Publish — Eventurus 文章图片上传与 HTML 替换
用法:
  1. 压缩 + 上传 + 替换(默认):
     python evt_publish.py --html Drops/酒店名/test_layout/article_with_images_v3.html
  2. 只压缩不上传(本地预览用):
     python evt_publish.py --html ... --compress-only

输出:
  与输入 HTML 同目录生成 article_final.html (src 已替换为 mmbiz 地址)
  以及 upload_log.json (本地文件名 -> mmbiz URL 对照表, 可复用避免重复上传)

一次性配置: 在脚本同目录放 wechat_config.json:
  {"appid": "wx开头的AppID", "secret": "AppSecret"}
前提: 公众号已认证, 且本机公网 IP 已加入公众号后台 IP 白名单
依赖: pip install requests pillow
"""

import argparse
import json
import re
import sys
import time
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image

MAX_WIDTH = 1080          # 统一最大宽度
JPEG_QUALITY = 82         # 压缩质量
MAX_BYTES = 1_000_000     # uploadimg 接口限制 1MB

TOKEN_URL = "https://api.weixin.qq.com/cgi-bin/token"
UPLOADIMG_URL = "https://api.weixin.qq.com/cgi-bin/media/uploadimg"

HERE = Path(__file__).resolve().parent


# ---------- access_token (缓存 2 小时, 落盘复用) ----------

def get_access_token() -> str:
    cfg_path = HERE / "wechat_config.json"
    if not cfg_path.exists():
        sys.exit("缺少 wechat_config.json, 请先配置 appid 和 secret")
    cfg = json.loads(cfg_path.read_text(encoding="utf-8"))

    cache_path = HERE / "wechat_token_cache.json"
    if cache_path.exists():
        cache = json.loads(cache_path.read_text(encoding="utf-8"))
        if time.time() < cache.get("expires_at", 0) - 300:
            return cache["access_token"]

    r = requests.get(TOKEN_URL, params={
        "grant_type": "client_credential",
        "appid": cfg["appid"],
        "secret": cfg["secret"],
    }, timeout=15)
    data = r.json()
    if "access_token" not in data:
        sys.exit(f"获取 access_token 失败: {data}\n"
                 f"常见原因: IP 不在白名单(errcode 40164) / secret 错误")
    cache = {
        "access_token": data["access_token"],
        "expires_at": time.time() + data.get("expires_in", 7200),
    }
    cache_path.write_text(json.dumps(cache), encoding="utf-8")
    return data["access_token"]


# ---------- 图片压缩 ----------

def compress_image(path: Path) -> bytes:
    """缩放到 MAX_WIDTH 宽, JPEG q82, 必要时递降质量保证 <1MB"""
    img = Image.open(path)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    if img.width > MAX_WIDTH:
        ratio = MAX_WIDTH / img.width
        img = img.resize((MAX_WIDTH, int(img.height * ratio)), Image.LANCZOS)

    quality = JPEG_QUALITY
    while quality >= 50:
        buf = BytesIO()
        img.save(buf, format="JPEG", quality=quality, optimize=True)
        if buf.tell() <= MAX_BYTES:
            return buf.getvalue()
        quality -= 8
    return buf.getvalue()  # 极端情况下返回 q50 结果


# ---------- 上传 ----------

def upload_image(token: str, name: str, data: bytes) -> str:
    r = requests.post(
        UPLOADIMG_URL,
        params={"access_token": token},
        files={"media": (name, data, "image/jpeg")},
        timeout=30,
    )
    res = r.json()
    if "url" not in res:
        sys.exit(f"上传失败 {name}: {res}")
    return res["url"]


# ---------- 主流程 ----------

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--html", required=True, help="带图 HTML 文件路径")
    ap.add_argument("--compress-only", action="store_true",
                    help="只压缩到 compressed/ 目录, 不上传")
    args = ap.parse_args()

    html_path = Path(args.html).resolve()
    html_dir = html_path.parent
    html = html_path.read_text(encoding="utf-8")

    # 提取所有本地 img src (跳过已是 http 的)
    srcs = [s for s in re.findall(r'<img[^>]+src="([^"]+)"', html)
            if not s.startswith("http")]
    if not srcs:
        sys.exit("HTML 中没有发现本地图片引用")
    print(f"发现 {len(srcs)} 张本地图片")

    # 上传记录复用: 同一张图改版重跑时不重复上传
    log_path = html_dir / "upload_log.json"
    log = json.loads(log_path.read_text(encoding="utf-8")) if log_path.exists() else {}

    if args.compress_only:
        out_dir = html_dir / "compressed"
        out_dir.mkdir(exist_ok=True)
        for src in srcs:
            p = (html_dir / src).resolve()
            data = compress_image(p)
            (out_dir / (p.stem + ".jpg")).write_bytes(data)
            print(f"  压缩 {p.name} -> {len(data)//1024}KB")
        print(f"完成, 输出在 {out_dir}")
        return

    token = get_access_token()
    for i, src in enumerate(srcs, 1):
        p = (html_dir / src).resolve()
        if not p.exists():
            sys.exit(f"找不到图片文件: {p}")
        key = p.name
        if key in log:
            print(f"[{i}/{len(srcs)}] {key} 已上传过, 复用")
        else:
            data = compress_image(p)
            url = upload_image(token, key, data)
            log[key] = url
            log_path.write_text(json.dumps(log, ensure_ascii=False, indent=2),
                                encoding="utf-8")
            print(f"[{i}/{len(srcs)}] {key} ({len(data)//1024}KB) -> 已上传")
            time.sleep(0.5)  # 温和限速
        html = html.replace(f'src="{src}"', f'src="{log[key]}"')

    out_path = html_dir / "article_final.html"
    out_path.write_text(html, encoding="utf-8")
    print(f"\n完成: {out_path}")
    print("浏览器打开该文件, 全选复制, 粘贴进 135 编辑器即可, 图片为微信 CDN 外链")


if __name__ == "__main__":
    main()

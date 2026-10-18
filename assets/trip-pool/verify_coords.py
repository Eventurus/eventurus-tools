# -*- coding: utf-8 -*-
"""
POI 坐标核验脚本 — 用腾讯 LBS WebService 核验 trip-pool 6 城坐标
跑法: env -u HTTP_PROXY ... python3 verify_coords.py
前置: key 当日配额未用完（每日约 1 万次，本脚本一次跑 ~240 次）
注意: key 配了域名白名单（eventurus.cn），请求必须带 Referer
"""
import json, math, time, urllib.request, urllib.parse, os

KEY = "TPDBZ-HAWLL-DNIPG-EGX2H-NTDZH-CVBSD"
REF = "https://www.eventurus.cn/"
CITIES = {"shanghai":"上海","beijing":"北京","chongqing":"重庆","chengdu":"成都","hangzhou":"杭州","suzhou":"苏州"}
os.chdir(os.path.dirname(os.path.abspath(__file__)))

def haversine(lat1,lng1,lat2,lng2):
    R=6371; p=math.pi/180
    a=(math.sin((lat2-lat1)*p/2)**2+math.cos(lat1*p)*math.cos(lat2*p)*math.sin((lng2-lng1)*p/2)**2)
    return 2*R*math.asin(a**0.5)

def search(zh, city):
    q = urllib.parse.urlencode({"keyword":zh,"boundary":f"region({city},0)","page_size":1,"output":"json","key":KEY})
    req = urllib.request.Request(f"https://apis.map.qq.com/ws/place/v1/search?{q}", headers={"Referer":REF})
    try:
        with urllib.request.urlopen(req, timeout=8) as r:
            d = json.loads(r.read())
        if d.get("status")==0 and d.get("data"):
            loc = d["data"][0]["location"]
            return loc["lat"], loc["lng"], d["data"][0].get("title","")
        print(f"  API err: {d.get('status')} {d.get('message')}")
    except Exception as e:
        print(f"  net err: {e}")
    return None

total_f = total_m = 0
for slug, city in CITIES.items():
    path = f"{slug}.json"
    data = json.load(open(path))
    fixed = miss = 0
    for p in data:
        r = search(p["zh"], city)
        if not r:
            miss += 1; continue
        lat, lng, title = r
        if haversine(p["lat"], p["lng"], lat, lng) > 1.0:
            p["lat"], p["lng"] = round(lat,4), round(lng,4)
            p["geo_verified"] = True
            fixed += 1
        time.sleep(0.12)
    json.dump(data, open(path,"w"), ensure_ascii=False, indent=0)
    total_f += fixed; total_m += miss
    print(f"{slug}: {len(data)} 条 | 修正 {fixed} | 未匹配 {miss}")

print(f"\n=== 完成: 修正 {total_f} | 未匹配 {total_m} / 240 ===")

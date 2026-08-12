(function () {
  "use strict";

  var PAGE_CONFIG = {
    "index.html": {
      group: "tools-home",
      intent: "follow",
      title: "Keep the China toolkit close.",
      body: "Follow Eventurus for practical China travel information and updates when new tools are published.",
      insert: { selector: "a.tool-card[href='packing-checklist.html']", position: "after" },
      sticky: "scroll"
    },
    "entry-requirements.html": {
      group: "entry",
      intent: "follow",
      title: "Keep the entry guide handy.",
      body: "Follow Eventurus for updates to China travel tools and practical entry information.",
      insert: { selector: ".entry-table-wrap", position: "after" },
      sticky: "scroll"
    },
    "china-holidays.html": {
      group: "planning",
      intent: "follow",
      title: "Plan around the busy weeks.",
      body: "Follow Eventurus for calendar updates and practical China travel information.",
      insert: { selector: "#holidayList", position: "dynamic-child", index: 1 },
      sticky: "scroll"
    },
    "packing-checklist.html": {
      group: "planning",
      intent: "follow",
      title: "Keep the packing checklist close.",
      body: "Follow Eventurus for new China travel tools and practical trip information.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "transit-matrix.html": {
      group: "transport",
      intent: "follow",
      title: "Save the route comparison.",
      body: "Follow Eventurus for updates to China transport tools and practical travel information.",
      insert: { selector: "#gridView", position: "after" },
      sticky: "scroll"
    },
    "train-guide.html": {
      group: "transport",
      intent: "follow",
      title: "Keep the seat guide handy.",
      body: "Follow Eventurus for updates to China rail guides and practical travel tools.",
      insert: { selector: ".class-card", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "metro-guide.html": {
      group: "transport",
      intent: "follow",
      title: "Save the metro guide.",
      body: "Follow Eventurus for updates to China transport guides and practical travel tools.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "didi-guide.html": {
      group: "transport",
      intent: "follow",
      title: "Keep the city transport guide handy.",
      body: "Follow Eventurus for updates to China transport guides and travel tools.",
      insert: { selector: ".section", position: "after-index", index: 1 },
      sticky: "scroll"
    },
    "payment-guide.html": {
      group: "payments",
      intent: "follow",
      title: "Keep the payment guide handy.",
      body: "Follow Eventurus for updates to China payment tools and practical travel information.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "essential-apps.html": {
      group: "apps",
      intent: "follow",
      title: "Keep the app guide close.",
      body: "Follow Eventurus for updates to practical China travel tools and app guides.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "museums-guide.html": {
      group: "destinations",
      intent: "follow",
      title: "Save the museum guide.",
      body: "Follow Eventurus for updates to China destination guides and travel tools.",
      insert: { selector: "#resultsGrid", position: "dynamic-child", index: 2 },
      sticky: "scroll"
    },
    "menu-translator.html": {
      group: "food-tools",
      intent: "follow",
      title: "Keep the menu tool handy.",
      body: "Follow Eventurus for updates to practical China travel tools and food guides.",
      insert: { selector: "#methodsSection", position: "after" },
      sticky: "scroll"
    },
    "city-season.html": {
      group: "destinations",
      intent: "follow",
      title: "Plan the timing of your trip.",
      body: "Follow Eventurus for updates to China destination tools and seasonal guides.",
      insert: { selector: "#cityGrid", position: "dynamic-visible-child", index: 3, refresh: "#search, #seasonFilter" },
      sticky: "scroll"
    },
    "chinese-cards.html": {
      group: "language-tools",
      intent: "follow",
      title: "Keep the phrase cards close.",
      body: "Follow Eventurus for updates to practical China travel tools and language guides.",
      insert: { selector: "#cardGrid", position: "dynamic-child", index: 5 },
      sticky: "scroll"
    },
    "emergency-guide.html": {
      group: "safety",
      intent: "follow",
      title: "Keep the emergency guide handy.",
      body: "Follow Eventurus for updates to practical China travel tools and safety information.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "visa-free-guide.html": {
      group: "entry",
      intent: "follow",
      title: "Keep the visa-free guide handy.",
      body: "Follow Eventurus for updates to China entry tools. Always verify current rules with the relevant authority before travelling.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "internet-guide.html": {
      group: "apps",
      intent: "follow",
      title: "Keep the connectivity guide handy.",
      body: "Follow Eventurus for updates to practical China travel tools and connectivity guides.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "dining-guide.html": {
      group: "food-tools",
      intent: "follow",
      title: "Keep the dining guide close.",
      body: "Follow Eventurus for updates to practical China travel tools and food guides.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "food-delivery-guide.html": {
      group: "food-tools",
      intent: "follow",
      title: "Keep the delivery guide handy.",
      body: "Follow Eventurus for updates to practical China travel tools and food guides.",
      insert: { selector: ".section", position: "after-index", index: 2 },
      sticky: "scroll"
    },
    "hospital-guide.html": {
      group: "safety",
      intent: "follow",
      title: "Keep the hospital guide handy.",
      body: "Follow Eventurus for updates to practical China travel tools and health information.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "pharmacy-guide.html": {
      group: "safety",
      intent: "follow",
      title: "Keep the medicine guide handy.",
      body: "Follow Eventurus for updates to practical China travel tools and health information.",
      insert: { selector: ".section", position: "after-index", index: 1 },
      sticky: "scroll"
    },
    "shopping-guide.html": {
      group: "apps",
      intent: "follow",
      title: "Keep the shopping guide handy.",
      body: "Follow Eventurus for updates to practical China travel tools and app guides.",
      insert: { selector: ".section", position: "after-index", index: 2 },
      sticky: "scroll"
    },
    "great-wall-guide.html": {
      group: "destinations",
      intent: "follow",
      title: "Save the Great Wall guide.",
      body: "Follow Eventurus for updates to China destination guides and practical travel tools.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "visa-checker.html": {
      group: "visa",
      intent: "follow",
      title: "Keep this result for later.",
      body: "Follow Eventurus for tool updates. Always verify visa rules with the relevant authority before travelling.",
      insert: { selector: "#result", position: "before-actions" },
      sticky: "result",
      resultSelector: "#result"
    },
    "trip-planner.html": {
      group: "trip-planning",
      intent: "follow",
      title: "Save this shortlist for later.",
      body: "Follow Eventurus for new China travel tools and destination guide updates.",
      insert: { selector: "#destList", position: "dynamic-child", index: 2 },
      sticky: "scroll"
    },
    "must-go.html": {
      group: "inspiration",
      intent: "follow",
      title: "Keep this destination guide close.",
      body: "Follow Eventurus for new tools and updates to our China destination guides.",
      insert: { heading: "The Desert & Vast", position: "before-heading" },
      remove: ".cta-box",
      sticky: "scroll"
    },
    "must-do.html": {
      group: "inspiration",
      intent: "follow",
      title: "Save these ideas for later.",
      body: "Follow Eventurus for practical China travel information and new tool updates.",
      insert: { heading: "Make & Create", position: "before-heading" },
      remove: ".cta-inline",
      sticky: "scroll"
    },
    "train-booking-guide.html": {
      group: "transport",
      intent: "follow",
      title: "Keep the rail guide handy.",
      body: "Follow Eventurus for updates to this guide and other practical China travel tools.",
      insert: { selector: ".section", position: "after-index", index: 0 },
      sticky: "scroll"
    },
    "airport-transport.html": {
      group: "transport",
      intent: "follow",
      title: "Save the arrival guide.",
      body: "Follow Eventurus for updates to this guide and other practical China travel information.",
      insert: { selector: "#grid", position: "dynamic-child", index: 3 },
      sticky: "scroll"
    },
    "first-weekend-shanghai.html": {
      group: "destinations",
      intent: "follow",
      title: "Keep the Shanghai weekend guide handy.",
      body: "Follow Eventurus for practical Shanghai information and updates to our destination guides.",
      insert: { selector: ".section", position: "after-index", index: 1 },
      sticky: "scroll"
    }
  };

  var page = window.location.pathname.split("/").pop() || "index.html";
  var config = PAGE_CONFIG[page];
  if (!config) return;

  var state = {
    stickyEligible: false,
    contentVisible: false,
    stickyDismissed: readSession("evt-sticky-dismissed-" + config.group) === "1"
  };

  document.body.classList.add("evt-contact-enabled");
  buildWechatDialog();
  buildHeaderButton();
  removeLegacyCta();
  var contentCta = mountContentCta();
  buildFooterContact();
  buildSticky(contentCta);
  observeImpression(contentCta);

  function readSession(key) {
    try { return window.sessionStorage.getItem(key); }
    catch (error) { return null; }
  }

  function writeSession(key, value) {
    try { window.sessionStorage.setItem(key, value); }
    catch (error) { return; }
  }

  function track(name, data) {
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(name, data);
    }
  }

  function eventData(placement, channel) {
    return {
      page: page,
      group: config.group,
      placement: placement,
      channel: channel || "none"
    };
  }

  function button(label, style, placement) {
    var el = document.createElement("button");
    el.type = "button";
    el.className = "evt-button" + (style === "secondary" ? " evt-button--secondary" : "");
    el.textContent = label;
    el.setAttribute("data-evt-action", "wechat");
    el.setAttribute("data-umami-event", "wechat-cta-click");
    el.setAttribute("data-umami-event-page", page);
    el.setAttribute("data-umami-event-group", config.group);
    el.setAttribute("data-umami-event-placement", placement);
    el.addEventListener("click", function () {
      openWechat(placement);
    });
    return el;
  }

  function buildHeaderButton() {
    var bar = document.querySelector(".brand-bar");
    if (!bar) return;
    bar.classList.add("evt-widget");
    var ask = button("Follow on WeChat", "secondary", "header");
    ask.className = "evt-header-ask";
    bar.appendChild(ask);
  }

  function createContentCta(placement) {
    var card = document.createElement("aside");
    card.className = "evt-widget evt-content-cta";
    card.setAttribute("aria-label", "Continue with Eventurus");
    card.setAttribute("data-evt-placement", placement);

    var copy = document.createElement("div");
    copy.className = "evt-content-cta__copy";
    var title = document.createElement("h2");
    title.className = "evt-content-cta__title";
    title.textContent = config.title;
    var body = document.createElement("p");
    body.className = "evt-content-cta__body";
    body.textContent = config.body;
    copy.appendChild(title);
    copy.appendChild(body);

    var actions = document.createElement("div");
    actions.className = "evt-content-cta__actions";
    actions.appendChild(button("Follow on WeChat", "primary", placement));

    card.appendChild(copy);
    card.appendChild(actions);
    return card;
  }

  function mountContentCta() {
    var card = createContentCta("content");
    var rule = config.insert;
    if (!rule) return card;

    if (rule.position === "after") {
      var afterTarget = document.querySelector(rule.selector);
      if (afterTarget) afterTarget.insertAdjacentElement("afterend", card);
    }

    if (rule.position === "before-actions") {
      var result = document.querySelector(rule.selector);
      var actions = result ? result.querySelector(".result-actions") : null;
      if (actions) result.insertBefore(card, actions);
    }

    if (rule.position === "after-index") {
      var matches = document.querySelectorAll(rule.selector);
      if (matches.length > rule.index) matches[rule.index].insertAdjacentElement("afterend", card);
    }

    if (rule.position === "before-heading") {
      var headings = document.querySelectorAll("h2");
      for (var i = 0; i < headings.length; i += 1) {
        if (headings[i].textContent.trim() === rule.heading) {
          var headingBlock = headings[i].closest(".section-header") || headings[i];
          headingBlock.insertAdjacentElement("beforebegin", card);
          break;
        }
      }
    }

    if (rule.position === "dynamic-child") {
      mountInsideDynamicList(card, rule);
    }

    if (rule.position === "dynamic-visible-child") {
      mountInsideDynamicList(card, rule, true);
    }

    return card;
  }

  function mountInsideDynamicList(card, rule, visibleOnly) {
    var host = document.querySelector(rule.selector);
    if (!host) return;

    function place() {
      if (card.parentNode) card.parentNode.removeChild(card);
      var children = Array.prototype.filter.call(host.children, function (child) {
        if (child.classList.contains("evt-content-cta")) return false;
        return !visibleOnly || window.getComputedStyle(child).display !== "none";
      });
      if (children.length > rule.index) children[rule.index].insertAdjacentElement("afterend", card);
      else if (children.length) children[children.length - 1].insertAdjacentElement("afterend", card);
      else host.appendChild(card);
    }

    place();
    var observer = new MutationObserver(function (changes) {
      var containsExternalChange = changes.some(function (change) {
        return Array.prototype.some.call(change.addedNodes, function (node) {
          return node !== card;
        });
      });
      if (containsExternalChange) place();
    });
    observer.observe(host, { childList: true });

    if (rule.refresh) {
      document.querySelectorAll(rule.refresh).forEach(function (control) {
        function refreshPlace() {
          window.setTimeout(place, 0);
        }
        control.addEventListener("input", refreshPlace);
        control.addEventListener("change", refreshPlace);
      });
    }
  }

  function removeLegacyCta() {
    if (!config.remove) return;
    var legacy = document.querySelector(config.remove);
    if (legacy) legacy.remove();
  }

  function buildFooterContact() {
    var footer = document.querySelector(".footer, .site-footer");
    if (!footer) return;
    var strip = document.createElement("aside");
    strip.className = "evt-widget evt-footer-contact";
    strip.setAttribute("aria-label", "Follow Eventurus on WeChat");
    strip.innerHTML = '<h2 class="evt-footer-contact__title">Keep Eventurus close</h2>' +
      '<p class="evt-footer-contact__body">Follow Eventurus for practical China travel information and updates when new tools are published.</p>' +
      '<div class="evt-footer-contact__actions"></div>';
    var actions = strip.querySelector(".evt-footer-contact__actions");
    actions.appendChild(button("Follow on WeChat", "primary", "footer"));
    footer.insertAdjacentElement("beforebegin", strip);
  }

  function buildWechatDialog() {
    var wechat = document.createElement("dialog");
    wechat.id = "evt-wechat-dialog";
    wechat.className = "evt-widget evt-dialog";
    wechat.setAttribute("aria-labelledby", "evt-wechat-title");
    wechat.innerHTML = '<div class="evt-dialog__inner">' +
      '<div class="evt-dialog__top"><div><h2 class="evt-dialog__title" id="evt-wechat-title">Follow Eventurus in WeChat</h2>' +
      '<p class="evt-dialog__intro">Get practical China travel information and updates when new tools are published.</p></div>' +
      '<button type="button" class="evt-dialog__close" data-close-dialog>Close</button></div>' +
      '<div class="evt-wechat-layout"><img class="evt-qr" src="assets/contact/wechat-official.jpg" alt="Eventurus WeChat Official Account QR code">' +
      '<div><h3>Eventurus</h3><p>Scan with WeChat. On mobile, long-press to save the code first.</p>' +
      '<ul class="evt-benefits"><li>China travel tips</li><li>New tool updates</li><li>Destination guide updates</li></ul></div></div></div>';
    document.body.appendChild(wechat);

    document.querySelectorAll("[data-close-dialog]").forEach(function (closeButton) {
      closeButton.addEventListener("click", function () {
        var dialog = closeButton.closest("dialog");
        if (dialog) dialog.close();
      });
    });

    wechat.addEventListener("click", function (event) {
      if (event.target === wechat) wechat.close();
    });
  }

  function openWechat(placement) {
    var dialog = document.getElementById("evt-wechat-dialog");
    if (!dialog) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    track("qr-reveal", eventData(placement, "wechat-official"));
  }

  function buildSticky(contentCta) {
    if (!config.sticky || state.stickyDismissed) return;
    var sticky = document.createElement("aside");
    sticky.className = "evt-widget evt-sticky";
    sticky.setAttribute("aria-label", "Follow Eventurus");
    sticky.setAttribute("aria-hidden", "true");
    sticky.innerHTML = '<div class="evt-sticky__copy">Want new tools and updates?</div><div class="evt-sticky__controls"></div>';
    var controls = sticky.querySelector(".evt-sticky__controls");
    controls.appendChild(button("Follow on WeChat", "primary", "sticky"));
    var dismiss = document.createElement("button");
    dismiss.type = "button";
    dismiss.className = "evt-sticky__dismiss";
    dismiss.textContent = "Close";
    dismiss.setAttribute("aria-label", "Dismiss WeChat prompt");
    dismiss.addEventListener("click", function () {
      state.stickyDismissed = true;
      writeSession("evt-sticky-dismissed-" + config.group, "1");
      updateSticky(sticky);
      track("cta-dismiss", eventData("sticky", "none"));
    });
    controls.appendChild(dismiss);
    document.body.appendChild(sticky);

    if (config.sticky === "result") observeResult(sticky);
    else observeHero(sticky);

    if (contentCta && "IntersectionObserver" in window) {
      var ctaObserver = new IntersectionObserver(function (entries) {
        state.contentVisible = entries[0].isIntersecting;
        updateSticky(sticky);
      }, { threshold: 0.25 });
      ctaObserver.observe(contentCta);
    }
  }

  function observeHero(sticky) {
    var hero = document.querySelector(".hero");
    if (!hero || !("IntersectionObserver" in window)) return;
    var heroObserver = new IntersectionObserver(function (entries) {
      var entry = entries[0];
      state.stickyEligible = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      updateSticky(sticky);
    }, { threshold: 0 });
    heroObserver.observe(hero);
  }

  function observeResult(sticky) {
    var result = document.querySelector(config.resultSelector);
    if (!result) return;
    function check() {
      state.stickyEligible = result.classList.contains("show");
      updateSticky(sticky);
      if (state.stickyEligible) track("tool-complete", eventData("result", "visa-checker"));
    }
    var resultObserver = new MutationObserver(check);
    resultObserver.observe(result, { attributes: true, attributeFilter: ["class"] });
    check();
  }

  function updateSticky(sticky) {
    var visible = state.stickyEligible && !state.contentVisible && !state.stickyDismissed;
    sticky.classList.toggle("is-visible", visible);
    sticky.setAttribute("aria-hidden", visible ? "false" : "true");
    document.body.classList.toggle("evt-sticky-visible", visible);
  }

  function observeImpression(contentCta) {
    if (!contentCta || !("IntersectionObserver" in window)) return;
    var seen = false;
    var observer = new IntersectionObserver(function (entries) {
      if (!seen && entries[0].isIntersecting) {
        seen = true;
        track("cta-impression", eventData("content", config.intent));
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(contentCta);
  }
})();

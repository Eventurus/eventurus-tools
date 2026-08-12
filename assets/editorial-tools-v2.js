(function () {
  "use strict";

  var button = document.getElementById("backToTop") || document.getElementById("back-to-top");
  var marker = document.querySelector(".hero") || document.querySelector(".brand-bar");
  if (!button || !marker) return;

  function setVisible(visible) {
    button.className = visible ? "is-visible" : "";
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      setVisible(!entries[0].isIntersecting);
    }, { rootMargin: "-120px 0px 0px 0px", threshold: 0 });
    observer.observe(marker);
  }

  button.addEventListener("click", function () {
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
}());

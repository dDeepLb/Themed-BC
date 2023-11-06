// ==UserScript==
// @name Themed BC
// @namespace https://www.bondageprojects.com/
// @version 0.0.1
// @description Bondage Club with themes!
// @author  dDeepLb
// @match /^https:\/\/(www\.)?bondage(?:projects\.elementfx|-europe)\.com\/R\d+\/(BondageClub|\d+)(\/)?(((index|\d+)\.html)?)?$/

// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
  "use strict";
  if (typeof ThemedBCLoaded === "undefined") {
    const script = document.createElement("script");
    script.src = `https://ddeeplb.github.io/Themed-BC/themed-bc.js?v=${Date.now()}`;
    document.head.appendChild(script);
  }
})();

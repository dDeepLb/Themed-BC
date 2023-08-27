// ==UserScript==
// @name Dark BC 
// @namespace https://www.bondageprojects.com/
// @version 0.0.1
// @description Bondage Club Dark Theme!
// @author  dDeepLb
// @include /^https:\/\/(www\.)?bondage(?:projects\.elementfx|-europe)\.com\/R\d+\/(BondageClub|\d+)(\/)?(((index|\d+)\.html)?)?$/

// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
    "use strict";
    if (typeof DarkBC_Loaded === "undefined") {
        const script = document.createElement("script");
        script.src = `https://ddeeplb.github.io/Dark-BC/DarkBC.js?v=${Date.now()}`;
        document.head.appendChild(script);
    }
})();

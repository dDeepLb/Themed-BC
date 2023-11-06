// ==UserScript==
// @name        Themed BC
// @namespace   https://www.bondageprojects.com/
// @version     0.0.1
// @description Bondage Club with themes!
// @author      dDeepLb
// @match       /^https:\/\/(www\.)?bondage(?:projects\.elementfx|-europe)\.com\/R\d+\/(BondageClub|\d+)(\/)?(((index|\d+)\.html)?)?$/

// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
  "use strict";
  const serverUrl = "http://127.0.0.1:1001";

  fetch(serverUrl)
    .then((response) => {
      const script = document.createElement("script");
      script.type = "module";
      script.setAttribute("crossorigin", "anonymous");
      script.src = `${serverUrl}/dist/themed.js`;
      document.head.appendChild(script);
      return;
    })
    .catch((error) => {
      const script = document.createElement("script");
      script.type = "module";
      script.setAttribute("crossorigin", "anonymous");
      script.src = `https://ddeeplb.github.io/BC-Responsive/main.js?v=${Date.now()}`;
      document.head.appendChild(script);
    });
})();

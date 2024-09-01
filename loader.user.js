// ==UserScript==
// @name Themed BC
// @namespace https://www.bondageprojects.com/
// @version 1.4.0
// @description Bondage Club with themes!
// @author  dDeepLb
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match https://bondageprojects.com/*
// @match https://www.bondageprojects.com/*
// @match http://localhost:*/*
// @match http://127.0.0.1:*/*

// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
  'use strict';
  const script = document.createElement('script');
  script.type = 'module';
  script.setAttribute('crossorigin', 'anonymous');
  script.src = `https://ddeeplb.github.io/Themed-BC/themed.js?v=${Date.now()}`;
  document.head.appendChild(script);
})();

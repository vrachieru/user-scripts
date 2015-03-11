// ==UserScript==
// @name 9gag disable idle timer
// @version 1.0
// @description Raise the idle threshold to 1 year
// @author Victor Rachieru
// @match *9gag.com*
// @grant none
// ==/UserScript==

GAG.App.loadConfigs({
  "configs": {
    "idlePopupIdleTime": 31556926000
  }
});

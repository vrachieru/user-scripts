// ==UserScript==
// @name xkcd arrow navigation
// @version 1.0
// @description Use the arrow keys to navigate through the comics
// @author Victor Rachieru
// @match *xkcd.com*
// @grant none
// ==/UserScript==

$(function() {
  $(document).keydown(function(e) {
    if (e.keyCode == 37) {
      document.querySelector('a[rel = prev]').click();
    } else if (e.keyCode == 39) {
      document.querySelector('a[rel = next]').click();
    }
  });
});

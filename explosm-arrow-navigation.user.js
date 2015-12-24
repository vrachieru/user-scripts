// ==UserScript==
// @name Cyanide and Happiness arrow navigation
// @version 1.0
// @description Use the arrow keys to navigate through the comics
// @author Victor Rachieru
// @match *explosm.net*
// @grant none
// ==/UserScript==

$(function() {
  $(document).keydown(function(e) {
    if (e.keyCode == 37) {
      document.querySelector('a[rel = previous-comic]').click();
    } else if (e.keyCode == 39) {
      document.querySelector('a[rel = next-comic]').click();
    }
  });
});

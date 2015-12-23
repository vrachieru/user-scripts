// ==UserScript==
// @name LoadingArtist arrow navigation
// @version 1.0
// @description Use the arrow keys to navigate through the comics
// @author Victor Rachieru
// @match *loadingartist.com*
// @grant none
// ==/UserScript==

$(function() {
  $(document).keydown(function(e) {
    if (e.keyCode == 37) {
      document.querySelector('a[rel = "normal highlight prev comic-thumb"]').click();
    } else if (e.keyCode == 39) {
      document.querySelector('a[rel = "normal highlight next comic-thumb"]').click();
    }
  });
});

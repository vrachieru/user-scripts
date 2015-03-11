// ==UserScript==
// @name 500px search arrow navigation
// @version 1.0
// @description Use the arrow keys to navigate through the search results pages
// @author Victor Rachieru
// @match *500px.com/search*
// @grant none
// ==/UserScript==

$(function() {
  $('#q').blur();
  $(document).keydown(function(e) {
    if (!$('#q:focus').length) {
      if (e.keyCode == 37) {
        document.querySelector('.previous_page').click();
      } else if (e.keyCode == 39) {
        document.querySelector('.next_page').click();
      }
    }
  });
});

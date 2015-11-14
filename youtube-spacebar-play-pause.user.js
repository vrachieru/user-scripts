// ==UserScript==
// @name Youtube pause with spacebar
// @version 1.0
// @description Use the spacebar to pause/resume video
// @author Victor Rachieru
// @match *youtube.com*
// @grant none
// ==/UserScript==

function main() {
  document.body.addEventListener('keydown', function(event) {
    if (!isInput() && event.keyCode == 32) {
      event.preventDefault();
      isFlashPlayer() ? flashPlayer() : htmlPlayer();
    }
  });
}

function isInput() {
  return document.activeElement.tagName == "INPUT"
    || document.activeElement.getAttribute("contenteditable") == "true";
}

function isFlashPlayer() {
  return document.querySelector("#movie_player") != null;
}

function flashPlayer() {
  var player = document.querySelector("#movie_player");
  var status = player.getPlayerState();
  if (status == 1 || status == 3) {
    player.pauseVideo();
  } else if (status == 0 || status == 2) {
    player.playVideo();
  }
}

function htmlPlayer() {

}

document.addEventListener('DOMContentLoaded', main());

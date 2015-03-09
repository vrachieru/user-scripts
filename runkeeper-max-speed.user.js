// ==UserScript==
// @name Runkeeper Max Speed
// @version 1.0
// @description Display max speed for an activity
// @author Victor Rachieru
// @match *runkeeper.com/user/*/activity/*
// @grant none
// ==/UserScript==

(function() {
  activityInfoCallbacks.push(function(activityInfo) {
    var avgSpeed  = activityInfo.statsSpeed;
    var maxSpeed  = activityInfo.chartData.series['SPEED'].data.sort(function(a, b) { return a[1] > b[1] }).pop().pop();

    setInterval(function() {
      var speedElems = document.querySelectorAll('#averageSpeed');
      Array.prototype.forEach.call(speedElems, function(elem) {
        var isAvg = elem.querySelector('h5').textContent == 'Average Speed';
        elem.querySelector('h5').textContent = isAvg ? 'Max Speed' : 'Average Speed';
        elem.querySelector('.value').textContent = isAvg ? (Math.floor(maxSpeed * 100) / 100) : avgSpeed;
      });
    }, 5000);
  });
})();

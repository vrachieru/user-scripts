// ==UserScript==
// @name Github Pull Request Branch Links
// @version 1.0
// @description Add links to the branches displayed in a PR
// @author Victor Rachieru
// @match https://github.com/*/*/pull/*
// @grant none
// ==/UserScript==

(function(unsafeWindow) {
	function init() {
		var owner    = document.querySelector('.url.fn').textContent;
		var repo     = document.querySelector('.js-current-repository').textContent;
		var branches = document.querySelectorAll('span.commit-ref.current-branch');

		Array.prototype.forEach.call(branches, function(item) {
			var params = item.textContent.trim().split(':');
			var link   = document.createElement('a');

			if (params.length != 2)
				params.unshift(owner);

			link.setAttribute('href', 'https://github.com/{user}/{repo}/tree/{branch}'
				.replace('{user}'  , params[0])
				.replace('{repo}'  , repo)
				.replace('{branch}', params[1]));

			link.innerHTML = item.innerHTML;
			item.innerHTML = '';
			item.appendChild(link);
		});
	}

	init() && unsafeWindow.$(document).on("pjax:end", init);
})(typeof unsafeWindow !== "undefined" ? unsafeWindow : window);

(function(browser) {
	"use strict";

	document.getElementById("message").textContent = "Screen Saver in WebExtensions";

	document.getElementById("settings").onclick = function() {
		browser.runtime.openOptionsPage();
	};

})(chrome || browser);

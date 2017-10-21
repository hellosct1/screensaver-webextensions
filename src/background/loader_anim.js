/*
 * Load a page animation
 *
 */

function loadMyPage() {
	browser.tabs.update({
		"url" : "/content_scripts/anim.htm"

	});
}

browser.browserAction.onClicked.addListener(loadMyPage);
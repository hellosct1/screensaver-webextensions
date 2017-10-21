function onError(error) {
	console.log(`Error: ${error}`);
}

function onGot(item) {
	// Fullscreen
	if (typeof (item.settings) != 'undefined'
			&& item.settings['fullscreen'] == true) {

//		console.log('Welcome Fullscreen');
		/*
		 * TODO : Update addEventListener Bug permission Fullscreen in the
		 * WebExtensions
		 * 
		 */
		document.addEventListener("keypress", function() {
			if (document.documentElement.requestFullScreen) {

				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {

				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {

				document.documentElement.webkitRequestFullScreen();
			}

		});

	}

	/*
	 * Load animation
	 */
	if (typeof (item.settings) == 'undefined') {
		addons();
	} else {
		if (item.settings['effet'] == 'oldschool') {
			anim(item);
		} else if (item.settings['effet'] == 'windows') {
			windows();
		} else {
			addons();
		}
	}
}

var gettingItem = browser.storage.local.get([ 'settings' ]);
gettingItem.then(onGot, onError);

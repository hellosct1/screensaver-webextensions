var settings = {};

function saveSettings(e) {

	settings['secondText'] = document.querySelector("#secondtext").value;
	settings['textanim'] = document.querySelector("#textanim").value;
	settings['message'] = document.querySelector("#message").value;
	settings['effet'] = document.querySelector("#effet").value;
	settings['sprite'] = document.getElementById("sprite").checked;
	settings['fullscreen'] = document.getElementById("fullscreen").checked;

	browser.storage.local.set({"settings" : settings});

	e.preventDefault();
}

function init() {

	var scrollText = "I present to you the first --> SCREEN SAVER <-- Customizable in WebExtension, Released in 2017 by Christophe Villeneuve (Hello) of SECTOR ONE... Greetings all the demoscene, Atari and the Group SECTOR ONE";

	settings['secondText'] = 'ONE';
	settings['textanim'] = 'SECTOR';
	settings['message'] = scrollText;
	settings['effet'] = 'oldschool';
	settings['sprite'] = true;
	settings['fullscreen'] = false;

	browser.storage.local.set({"settings" : settings});
	
	return;
}

function restoreSettings(item='') {

	if (typeof (item.settings) == 'undefined') {
		init();
		window.location.reload(); 
	} else {
		document.getElementById("secondtext").value = item.settings['secondText'];
		document.getElementById("textanim").value = item.settings['textanim'];
		document.getElementById("message").value = item.settings['message'];
		document.getElementById("effet").value = item.settings['effet'];
		document.getElementById("sprite").checked = item.settings['sprite'];
		document.getElementById("fullscreen").checked = item.settings['fullscreen'];
	}
}

browser.storage.local.get([settings]).then(restoreSettings);
document.querySelector("form").addEventListener("submit", saveSettings);

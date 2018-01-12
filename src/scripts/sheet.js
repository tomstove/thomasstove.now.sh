/**
	Sheet functions
*/

function showSheet(el) {
	var element = document.getElementById(el);
	element.classList.remove("hidden");
	overlay.classList.remove("hide");
	overlay.classList.add("show");
	document.body.classList.add("no-scroll");
}

function hideSheet(el) {
	var element = document.getElementById(el);
	element.classList.add("hidden");
	overlay.classList.remove("show");
	overlay.classList.add("hideIt");
	setTimeout(function() {
		overlay.classList.remove("hideIt");
		overlay.classList.add("hide");
		document.body.classList.remove("no-scroll");
	}, 500);
}

var overlay = document.getElementById("overlay");

var sheet = {
	showSheet: showSheet,
	hideSheet: hideSheet
}

module.exports = sheet;

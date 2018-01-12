'use strict';

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

document.getElementById('selectedWorks').addEventListener('click', function(e) {
	console.log(e);
	showSheet('selectedWorksSheet');
});

document.getElementById('overlay').addEventListener('click', function(e) {
	console.log(e);
	hideSheet('selectedWorksSheet');
});

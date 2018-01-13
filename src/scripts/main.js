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

// open selectedWorksSheet
document.getElementById('selectedWorks').addEventListener('click', function(e) {
	//console.log(e);
	showSheet('selectedWorksSheet');
});

// open sketchbookSheet
document.getElementById('sketchbook').addEventListener('click', function(e) {
	//console.log(e);
	showSheet('sketchbookSheet');
});

// open bioSheet
document.getElementById('bio').addEventListener('click', function(e) {
	//console.log(e);
	showSheet('bioSheet');
});

// close selectedWorksSheet when worksCloseBtn is clicked
document.getElementById('worksCloseBtn').addEventListener('click', function(e) {
	//console.log(e);
	hideSheet('selectedWorksSheet');
});

// close sketchbookSheet when sketchbookCloseBtn is clicked
document.getElementById('sketchbookCloseBtn').addEventListener('click', function(e) {
	//console.log(e);
	hideSheet('sketchbookSheet');
});

// close bioSheet when bioCloseBtn is clicked
document.getElementById('bioCloseBtn').addEventListener('click', function(e) {
	//console.log(e);
	hideSheet('bioSheet');
});

// close sheet when overlay is clicked
document.getElementById('overlay').addEventListener('click', function(e) {
	//console.log(e);
	hideSheet('selectedWorksSheet');
	hideSheet('sketchbookSheet');
	hideSheet('bioSheet');
});
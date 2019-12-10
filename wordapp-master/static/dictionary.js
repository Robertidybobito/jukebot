"use strict"

var popup;

function openpopup(element) {
	popup = document.getElementById("popup");
	var wordclick = document.getElementById("wordbox");
	
	wordclick.onclick = function() {
		popup.style.display = "block";
	};
}


window.onclick = function(event) {
	popup.style.display = "none";
}

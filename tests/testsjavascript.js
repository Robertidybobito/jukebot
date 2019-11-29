var musicplayer;
var showviddetails;

function onLoad() {
	musicplayer = document.getElementById("musicplayer");
	musicplayer.src = "20191128_210922.mp4";
	showviddetails = document.getElementById("showviddetails");
	showviddetails.innerHTML = srcParse(musicplayer.src);
	musicplayer.autoplay = true;
	musicplayer.addEventListener("ended", changeVid);
}

function changeVid() {
	var compare = srcParse(musicplayer.src);
	if (compare.localeCompare("20191128_210922.mp4") == 0) {
		alert("changing to video 2");
		musicplayer.src = "20191128_221149.mp4";
	} else {
		alert("changing to video 1");
		musicplayer.src = "20191128_210922.mp4";
	}
	musicplayer.load();	
	showviddetails.innerHTML = compare;
}

function playPause() {
	if (musicplayer.paused) {
		musicplayer.play();
	} else {
		musicplayer.pause();
	}
}

function srcParse(videosrc) {
	var res = videosrc.split("/");
	return res[res.length - 1];
}




/* ---------------- References ---------------- 
 
HTML Audio/Video DOM Reference
https://www.w3schools.com/tags/ref_av_dom.asp
 
Use event listener to see when video ends
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
 
 */


/* ---------------- Unused ----------------

function startVid() {
	var musicplayer = document.getElementById("musicplayer");
	musicplayer.src = "testvideo.mp4";
	musicplayer.play();	
}


*/

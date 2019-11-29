function startVid() {
	var musicplayer = document.getElementById("musicplayer");
	musicplayer.src = "testvideo.mp4";
	musicplayer.play();	
}

function playPause() {
	var musicplayer = document.getElementById("musicplayer");
	if (musicplayer.paused) {
		musicplayer.play();
	} else {
		musicplayer.pause();
	}
}

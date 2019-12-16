var player;
var songlist = [];
var playlist = [];
    playlist.length = 7;

function onYouTubeIframeAPIReady() {
	buildMasterList();
    player = new YT.Player('youtubeplayer', {
        width: 600,
        height: 400,
        videoId: playlist[3][1],
        events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
    });
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	var state = player.getPlayerState();
	if (state == "0") {
		pickSong();
		buildTable();
		player.loadVideoById({videoId:playlist[3][1],
			                  startSeconds:1});
	}
}

function buildMasterList() {
	var list = document.getElementById("hiddenmasterlist");
	for (var i=1, l=list.childNodes.length; i<l; i=i+2) {
		var song = {};
		song["id"]=list.childNodes[i].childNodes[1].innerHTML;
		song["name"]=list.childNodes[i].childNodes[3].innerHTML;
		song["url"]=list.childNodes[i].childNodes[5].innerHTML;
		// option for checking for error_flag
		songlist.push(song);
	}
	
	for (var i=0; i<4; i++)
		pickSong();
	buildTable();
}

function pickSong() {
	var index = Math.floor(Math.random() * songlist.length);
	var song = songlist[index];
	var parse = song['url'].split("=");
	playlist.push([song,parse[1]]);
	playlist.shift();
}

function buildTable() {
	function tabletitle(tbl) {
		var tr, th;
		tr = document.createElement("tr");
		tbl.appendChild(tr);
		
		th = document.createElement("th");
		th.innerHTML = "Name";
		tr.appendChild(th);
		
		th = document.createElement("th");
		th.innerHTML = "Link";
		tr.appendChild(th);
		
		tbl.appendChild(tr);
	}
	function table(tbl, range) {
		tabletitle(tbl);
		var tr, td;
		for (var i in range) {
			var index = range[i];
			tr = document.createElement("tr");
			tbl.appendChild(tr);
			
			// Song name
			td = document.createElement("td");
			if (playlist[index] == undefined) {
				td.innerHTML = "";
			} else {
				td.innerHTML = playlist[index][0]['name'];
			}
			tr.appendChild(td);
			
			// Song link
			td = document.createElement("td");
			if (playlist[index] == undefined) {
				td.innerHTML = "";
			} else {
				var a = document.createElement('a');
				var link = document.createTextNode("YouTube");
				a.appendChild(link);
				// a.title = "Hover link text";
				a.href = playlist[index][0]['url'];
				a.target = "_blank";
				td.appendChild(a);
			}
			tr.appendChild(td);
			
			tbl.appendChild(tr);			
		}
	}
	
	var upnext = document.getElementById("upnext");
	var currentsong = document.getElementById("currentsong");
	var justplayed = document.getElementById("justplayed");
	
	upnext.innerHTML = "Up Next";
	table(upnext, [6,5,4]);
	
	currentsong.innerHTML = "Current Song";
	table(currentsong, [3]);
	
	justplayed.innerHTML = "Just Played";
	table(justplayed, [0,1,2]);
}

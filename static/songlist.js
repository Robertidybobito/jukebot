var player;
var songlist = [];
var playlist = [];
    playlist.length = 7;

function buildSongList() {
	var list = document.getElementById("hiddenmasterlist");
	for (var i=1, l=list.childNodes.length; i<l; i=i+2) {
		var song = {};
		song["song_id"]=list.childNodes[i].childNodes[1].innerHTML;
		song["name"]=list.childNodes[i].childNodes[3].innerHTML;
		song["url"]=list.childNodes[i].childNodes[5].innerHTML;
		song["user"]=list.childNodes[i].childNodes[7].innerHTML;
		song["flag_error"]=list.childNodes[i].childNodes[9].innerHTML;
		songlist.push(song);
	}
	buildSongTable();
}

function buildSongTable() {
	function tabletitle(tbl) {
		var tr, th;
		tr = document.createElement("tr");
		tbl.appendChild(tr);
		
		th = document.createElement("th");
		th.innerHTML = "Song ID";
		tr.appendChild(th);
		
		th = document.createElement("th");
		th.innerHTML = "Name";
		tr.appendChild(th);
		
		th = document.createElement("th");
		th.innerHTML = "Link";
		tr.appendChild(th);
		
		th = document.createElement("th");
		th.innerHTML = "User";
		tr.appendChild(th);
		
		th = document.createElement("th");
		th.innerHTML = "Error?";
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
	table(upnext, [4,5,6]);
	
	currentsong.innerHTML = "Current Song";
	table(currentsong, [3]);
	
	justplayed.innerHTML = "Just Played";
	table(justplayed, [2,1,0]);
}

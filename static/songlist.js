var player;
var songlist = [];
var userlist = [];

function buildLists() {
	var slist = document.getElementById("hiddensonglist");
	for (var i=1, l=slist.childNodes.length; i<l; i=i+2) {
		var song = {};
		song["song_id"]=slist.childNodes[i].childNodes[1].innerHTML;
		song["name"]=slist.childNodes[i].childNodes[3].innerHTML;
		song["url"]=slist.childNodes[i].childNodes[5].innerHTML;
		song["user"]=slist.childNodes[i].childNodes[7].innerHTML;
		song["flag_error"]=slist.childNodes[i].childNodes[9].innerHTML;
		songlist.push(song);
	}
	var ulist = document.getElementById("hiddenuserlist");
	for (var i=1, l=ulist.childNodes.length; i<l; i=i+2) {
		var user = {};
		user["user_id"]=ulist.childNodes[i].childNodes[1].innerHTML;
		user["user_name"]=ulist.childNodes[i].childNodes[3].innerHTML;
		userlist.push(user);
	}
	console.log("slist = " + slist);
	console.log("songlist = " + songlist);
	console.log("ulist = " + ulist);
	console.log("userlist = " + userlist);
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
		for (var i in songlist) {
			console.log("songlist[i] = " + songlist[i]);
			var index = songlist[i];
			tr = document.createElement("tr");
			tbl.appendChild(tr);
			
			// Song ID
			td = document.createElement("td");
			td.innerHTML = songlist[index]['song_id'];
			tr.appendChild(td);
			
			// Song name
			td = document.createElement("td");
			td.innerHTML = playlist[index]['name'];
			tr.appendChild(td);
			
			// Song link
			td = document.createElement("td");
			
			var a = document.createElement('a');
			var link = document.createTextNode("YouTube");
			a.appendChild(link);
			a.href = playlist[index]['url'];
			a.target = "_blank";
			td.appendChild(a);
			
			tr.appendChild(td);
			
			tbl.appendChild(tr);
			
			// User name
			td = document.createElement("td");
			td.innerHTML = playlist[index]['name'];
			tr.appendChild(td);
			
			// Song name
			td = document.createElement("td");
			td.innerHTML = playlist[index]['name'];
			tr.appendChild(td);
		}
	}
	
	var masterlist = document.getElementById("masterlist");
	table(masterlist);
}

window.addEventListener("load", buildLists);

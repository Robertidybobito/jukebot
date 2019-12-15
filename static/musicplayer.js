var player;
	time_update_interval = 0;

var songlist, table;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: '',
        events: {
            onReady: buildMasterList
        }
    });
}

function buildMasterList() {
	vnglist = new Array();
	var list = document.getElementById("hiddenmasterlist");
	for (var i=1, l=list.childNodes.length; i<l; i=i+2) {
		var song = {};
		song["id"]=list.childNodes[i].childNodes[1].innerHTML;
		song["name"]=list.childNodes[i].childNodes[3].innerHTML;
		song["url"]=list.childNodes[i].childNodes[5].innerHTML;
		songs.push(song);
	}
	
	table
}

function buildPlaylistTable() {
	
}

function jukeboxLoop() {
	
}

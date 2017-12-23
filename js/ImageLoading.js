var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");
var trackPics = [];

var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady(){
	picsToLoad --;
	console.log(picsToLoad);
	if (picsToLoad == 0){
		imageLoadingDoneSoStartGame(); 
	}
}

function beginLoadingImage(imgVar, fileName){
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName){
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages(){
	
	var imageList = [
		{varName: carPic, theFile: "car1.png"},
		{varName: otherCarPic, theFile: "car2.png"},
		{trackType: TRACK_WALL_SMALL, theFile: "TRACK_WALL_SMALL.png"},
		{trackType: TRACK_ROAD, theFile: "track_road.png"},
		{trackType: TRACK_FINISH, theFile: "track_finish.png"},
		{trackType: TRACK_TREE, theFile: "track_tree.png"},
		{trackType: TRACK_RIGHT_DOWN_CORNER, theFile: "TRACK_RIGHT_DOWN_CORNER.png"},
		{trackType: TRACK_RIGHT_UP_CORNER, theFile: "TRACK_RIGHT_UP_CORNER.png"},
		{trackType: TRACK_LEFT_DOWN_CORNER, theFile: "TRACK_LEFT_DOWN_CORNER.png"},
		{trackType: TRACK_LEFT_UP_CORNER, theFile: "TRACK_LEFT_UP_CORNER.png"},
		{trackType: TRACK_FLAG, theFile: "TRACK_FLAG_SMALL.png"}
		];

	picsToLoad = imageList.length;
	
	for (var i=0; i<imageList.length; i++){
		if (imageList[i].varName != undefined){
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForTrackCode (imageList[i].trackType, imageList[i].theFile)
		}
	}
}
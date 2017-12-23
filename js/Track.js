

const TRACK_W = 25;
const TRACK_H = 25;
const TRACK_GAP = 2;
const TRACK_ROWS = 24;
const TRACK_COLS = 32;



var levelOne  = [04, 04, 04, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 04, 04,
				 04, 04, 06, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 09, 00, 00, 00, 00, 00, 00, 08, 04,
				 04, 06, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 05, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 09, 00, 00, 00, 00, 01, 00, 00, 00, 09, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 05, 01, 00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 01, 04, 00, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 01, 04, 00, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 01, 04, 00, 00, 00, 00, 00, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 01, 04, 04, 04, 04, 04, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 01, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 02, 00, 02, 01, 00, 00, 00, 08, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 03, 03, 03, 01, 00, 00, 00, 00, 08, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 06, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 08, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 06, 00, 00, 00, 00, 01,
				 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01,
				 04, 07, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01,
				 04, 04, 07, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 04,
				 04, 04, 04, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 04, 04]

var trackGrid = [];

const TRACK_ROAD = 00;
const TRACK_WALL_SMALL = 01;
const TRACK_PLAYERSTART = 02;
const TRACK_FINISH = 03;
const TRACK_TREE = 04;
const TRACK_RIGHT_DOWN_CORNER = 05;
const TRACK_RIGHT_UP_CORNER = 06;
const TRACK_LEFT_DOWN_CORNER = 07;
const TRACK_LEFT_UP_CORNER = 08;
const TRACK_FLAG = 09;


function returnTileTypeAtColRow(col,row){
	if(col >= 0 && col < TRACK_COLS &&
	   row >= 0 && row < TRACK_ROWS){
		var trackIndexUnderCoord = rowColToArrayIndex(col,row);
		return trackGrid[trackIndexUnderCoord];
	} else {
		return TRACK_WALL;
	}
}

function carTrackHandling(whichCar){
	var carTrackCol = Math.floor(whichCar.x / TRACK_W);
	var carTrackRow = Math.floor(whichCar.y / TRACK_H);
	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
		carTrackRow >= 0 && carTrackRow < TRACK_ROWS){
		
		var tileHere = returnTileTypeAtColRow (carTrackCol,carTrackRow);
		
		if (tileHere == TRACK_FINISH){
			console.log(whichCar.name + " WINS!!");
			loadLevel(levelOne);
		} else if (tileHere != TRACK_ROAD){
			whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
			whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
			whichCar.speed *= -0.5;
		}// end of track found
	} // end of valid col and row
} // end of carTrackHandling()

function rowColToArrayIndex(col, row){
	return col + TRACK_COLS * row;
}

function drawTrack(){

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++){
		for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++){
			var tileKind = (trackGrid[arrayIndex]);
			var useImg = trackPics[tileKind];

			canvasContext.drawImage(useImg, drawTileX, drawTileY);
			drawTileX += TRACK_W;
			arrayIndex++;
		} // end of for each col
		drawTileX = 0;
		drawTileY += TRACK_H;
	} // end of for  each row
	
} // end of function drawTrack


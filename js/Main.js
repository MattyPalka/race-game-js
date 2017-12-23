var canvas, canvasContext;

var blueCar = new carClass(); 
var pinkCar = new carClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0, 0, canvas.width, canvas.height, 'black');
	loadImages();
}

function imageLoadingDoneSoStartGame(){
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();

	loadLevel(levelOne);
}

function loadLevel(whichLevel) {
	trackGrid = whichLevel.slice();
	pinkCar.reset(otherCarPic, "Pink Carnival");
	blueCar.reset(carPic, "Blue Thunder");
	
}

function updateAll(){
	moveAll();
	drawAll();
}

function moveAll(){
	blueCar.move();
	pinkCar.move();

}


function drawAll(){
	drawTrack();
	blueCar.draw();
	pinkCar.draw();
} // end of drawAll()

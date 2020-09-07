let img=[];
let counter=0;
let imgArray=['space-stars-galaxy-graphics.jpg','dishonored-2-2016-2-pic.jpg','Dishonored2-N-For-Nerds.jpg','maxresdefault.jpg'] 
let song;
let playing=false;
let drift;
let wall;
let direction=90;
function preload() { 
	song=loadSound('gamemusic.mp3');
	for (x in imgArray){
		img.push(loadImage(imgArray[x]));	
	} 
}
	
function setup() {
  createCanvas(700, 700);
  drift = createSprite(400,200,50,100);
  wall = createSprite (500,200,50,100);
  drift.addAnimation('floating','sun1.png','sun2.png','sun3.png');
  wall.addAnimation('stil', 'box0001.png','box0002.png','box0003.png');
}

function draw() {
	image(img[counter%img.length],0,0);
	drift.setSpeed(3,direction);
	wall.displace(drift);
	drawSprites();
}
  
function doubleClicked(event){
	counter=counter+1;    
}	

function keyPressed(){
	if (keyCode === 32 && !playing){
		song.playMode('sustain');
		song.play();
		playing=true;
	} else if (keyCode === 32 && playing){
		song.stop();
		playing=false;
	}


	if (keyCode === UP_ARROW){
		direction=270;
	}
	if (keyCode === DOWN_ARROW){
		direction=90;
	}
	if (keyCode === RIGHT_ARROW){
		direction=0;
	}
	if (keyCode === LEFT_ARROW){
		direction=180;
	}
}
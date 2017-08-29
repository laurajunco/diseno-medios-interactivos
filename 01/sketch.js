//medios interactivos clase 2017-1
// clase 1 Agosto 14

function setup() { 
  createCanvas(400, 400);
	background(0, 0, 255);
  randomSeed(5);
  
  
    
   //punto y linea blancos
  strokeWeight(5);
	stroke(255);
  fill(255, 0, 0);
  
  for (var i = 0; i < 5; i++) {
    rect(random(20, height - 50), random(20, height - 50), random(10,100), random(10,100));
    ellipse(random(20, height - 50), random(20, height - 50), random(10,100), random(10,100));
	}
  

} 

function draw() { 

}
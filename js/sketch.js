let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('../images/MyLogoSimple200.png');
}

function setup() {
  var canvas = createCanvas(200, 250);
  canvas.parent('p5canvas');

}

function draw(){
    background(255);
    image(img, 0, sin(frameCount*0.03)*25+25);
}
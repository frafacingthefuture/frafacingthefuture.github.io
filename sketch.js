let img;
let moveX;
let moveY;
let disX;
let disY;
let x,y;
let video;

function preload() {
  img = loadImage('TCAAEM.jpg');
    video = createVideo(['water.mp4']);
  video.hide();
}

function setup() {
  dis = 0;
  mappedDis = 0;
  x= width/2;
  y= height/2;
  createCanvas(displayWidth, displayHeight);
  imageMode(CENTER);
     video.loop()
  //image(img, width/2, height/2, 1200,800);
}


function draw() {
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);
  //dis = dist(mouseX, mouseY, width/2, height/2);
  //mappedDis = map(dis, 0,250,0,30)
  //console.log(dis);
  //moveX = mouseX - width/2;
  //moveY = mouseY - height/2;
  image(video, x, y, img.width*2,img.height*2);
}

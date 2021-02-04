const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world, boy, bolt1, bolt2, bolt3, bolt4, rand;
var drops = [];

function preload() {
    bolt1 = loadImage("thunderbolt/1.png");
    bolt2 = loadImage("thunderbolt/2.png");
    bolt3 = loadImage("thunderbolt/3.png");
    bolt4 = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(windowWidth,windowHeight);
   engine = Engine.create();
   world = engine.world;
   boy = new Umbrella(windowWidth/2,windowHeight/5*4,windowHeight/8.5);
   boy.scale = 0.5;

   for(var i=0; i < 1000; i++) {
       drops.push(new Drop(random(0,windowWidth),random(-windowHeight,0),10));
   } 
}

function draw(){
    background(color(0,0,mouseY));
    Engine.update(engine);
    rand = Math.round(random(1,4));
    
    boy.display();

    for (var i = 0; i < drops.length; i++) {
        drops[i].display();
        drops[i].update();
    }

    if(frameCount % 10 === 0) {
        imageMode(CENTER);
        if(rand===1) {
            image(bolt1,random(20,windowWidth/2-20),0,windowWidth/5,windowHeight/2);
        } else if(rand===2) {
            image(bolt2,random(20,windowWidth/2-20),0,windowWidth/5, windowHeight/2);
        } else if(rand===3) {
            image(bolt3,random(20,windowWidth/2-20),0,windowWidth/5,windowHeight/2);
        } else if(rand===4) {
            image(bolt4,random(20,windowWidth/2-20),0,windowWidth/5,windowHeight/2);
        } 
    }

}

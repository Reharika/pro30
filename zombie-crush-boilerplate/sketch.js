const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones =[]

var bg_img,axe_img,zombie_img;
var joint;
var bridge;

function preload(){
   bg_img  = loadImage("background.png");
   axe_img = loadImage("axe.png")
   zombie_img = loadImage("zombie.png")
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  bridge = new Bridge(20,{x:40,y:height/2-100})
  leftWall = new Base(30,height/2+50,200,100);
  //rightWall = new Base(width-200,height/2+50,150,100);
 //console.log(width)s
  joint = new Base(width-200,height/2-100,40,20)
  Matter.Composite.add(bridge.body,joint)
  rope = new Link(bridge,joint)
  ground = new Base(width/2,height-10,width,20)

  for(var i =0; i <8;i++){
    x = random (width/2-100,width/2+100)
    var stone = new Stone(x,0,30)
    stones.push(stone);
  }


  zombie = createSprite(width / 2, height - 60);
  zombie.addImage(zombie_img)
  zombie.scale = 0.1;
  zombie.velocityX = 1;

  breakButton = createImg("axe.png");
  breakButton.position(width/2,100);
  breakButton.size(50,50)
  breakButton.mouseClicked(handleButtonPress);

  frameRate(80);

}

function draw() {
  background(bg_img);

  bridge.show();
  //leftWall.show();
  //rightWall.show();
  ground.show();
//joint.show()
for(var stone of stones){
  stone.display();
}
  Engine.update(engine);
  drawSprites();

}
function handleButtonPress() {
  rope.detach()
  setTimeout(() => {
    bridge.break();
  }, 1500);
}

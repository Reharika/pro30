class Stone  {
     constructor(x,y,r){
       this.body = Bodies.circle(x,y,r)
       this.r = r;
       this.x = x;
       this.y = y;
       World.add(world,this.body);
       this.image= loadImage("stone.png")
     }
     display(){
         //ellipseMode(RADIUS);
         //ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2);
         imageMode(CENTER);
         image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2);
     }
}
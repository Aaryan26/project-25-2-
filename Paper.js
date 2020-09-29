class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restituion:0.3,
            friction:0.5,
            density:0.8,           
        }
        this.body=Bodies.circle(x,y,radius-50/2,options);
        World.add(world,this.body);
        this.image=loadImage("paper.png")

        this.radius=radius;
   }
   display(){
       var pos=this.body.position;
       //ellipseMode(RADIUS);
       //ellipse(pos.x, pos.y, this.radius, this.radius);

       imageMode(CENTER);
       image (this.image, pos.x, pos.y, this.radius, this.radius);
   }
}

































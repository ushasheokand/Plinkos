class Ground
{
    constructor(x,y,w,h)
    {
        var options= {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height= h;
        World.add(world , this.body);
    }

  // Not going to use currently
    display()
    {
        var pos= this.body.position;
        push();
        strokeWeight(0.1);
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
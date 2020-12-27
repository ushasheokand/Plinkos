class Plinko
{
    constructor (x,y,r){
        var options ={
            isStatic : true
        }

        this.body = Bodies.circle (x,y,r/2,options);
        this.r= r; 
        World.add(world, this.body);
    }

    display()
    {
        var pos= this.body.position;
        rectMode(CENTER);
        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r,this.r);
    }
};
class Stone{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
			restitution :0,
            friction :1,
            density :1.2
        }     
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x, y,r, options)
        this.r=r;
        this.image=loadImage("images/stone.png");
		World.add(world, this.body);
    }

    display()
    {
        var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r,this.r);
		pop()
    }
}
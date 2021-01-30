class dustbin{
    constructor(x,y,width,height){
        var options ={
            'restitution':0.4,
            'friction':1.0,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.paper);
    }
}
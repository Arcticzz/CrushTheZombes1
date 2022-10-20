class Stone{
    constructor(x,y,w,h){
        let Options={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,w,h,Options);
        this.w=w;
        this.h=h;
        this.color=color;
        World.add(world,this.body);
    }
    show(){
        let pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(1);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h);
        noStroke();
        pop();
    }
}

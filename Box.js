class Box {
    constructor(x,y,width,height) {
        var options = {
            restitution:0, 
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.options = options;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill('red');
        rect(pos.x,pos.y,this.width,this.height);  
    }
    
};
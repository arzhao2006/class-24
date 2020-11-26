//blueprint is called a class
class Pig{
    //first thing that gets invoked when we are creating a new object
    constructor(x, y){
        var options = {
            restitution: 0.8,
            friction:1.0,
            density:1.0
        }
        //this key word is used to refer to the current object created in this class
        this.body = Bodies.rectangle(x, y,50, 50, options);
        this.width = 50
        this.height = 50
        World.add(world, this.body);
    }
    //created a display function to display the box
    display(){
        var position = this.body.position
        var angle = this.body.angle;
        push();
        translate(position.x, position.y)
        rotate(angle)
        rectMode(CENTER);
        fill("pink");
        rect(0, 0, this.width, this.height);
        pop();
    }
}   
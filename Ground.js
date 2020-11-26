
class Ground{
    //first thing that gets invoked when we are creating a new object
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        //this key word is used to refer to the current object created in this class
        this.body = Bodies.rectangle(x, y,width, height, options);
        this.width = width
        this.height = height
        World.add(world, this.body);
    }
    //created a display function to display the box
    display(){
        var position = this.body.position
        rectMode(CENTER);
        fill("brown");
        rect(position.x, position.y, this.width, this.height);
    }
}   
class Drops{
    constructor(x,y){
        var option = {}
        this.body = Matter.Bodies.circle(x,y,10,option)
        World.add(world,this.body)
    }

    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,10,10)
    }

    updateposition(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,600)})
        }
    }
}
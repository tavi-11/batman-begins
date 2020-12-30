class Umbrella{
    constructor(x,y){
        var option = {
            isStatic: true
        }
        this.body = Matter.Bodies.circle(x,y,50,option)
        World.add(world,this.body)
        this.image = loadImage('walking_1.png')
        //this.walking = loadAnimation('walking_1.png','walking_2.png','walking_3.png','walking_4.png','walking_5.png','walking_6.png','walking_7.png','walking_8.png')
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,350,350)
    }
}
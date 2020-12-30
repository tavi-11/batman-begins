const Engine = Matter.Engine
const World = Matter.World

var walking
var thunder1, thunder2, thunder3, thunder4
var engine, world
var maxdrops = 100
var drops = []
var thunderframe

function preload(){
    walking = loadAnimation('walking_1.png','walking_2.png','walking_3.png','walking_4.png','walking_5.png','walking_6.png','walking_7.png','walking_8.png')
    thunder1 = loadImage('1.png')
    thunder2 = loadImage('2.png')
    thunder3 = loadImage('3.png')
    thunder4 = loadImage('4.png')
}

function setup(){
   createCanvas(400,600)
   engine = Engine.create()
   world = engine.world
   umbrella = new Umbrella(200,400)
   for(var i=0; i<maxdrops; i++){
       drops.push(new Drops(random(0,400), random(0,400)))
   }
}

function draw(){
    background(0)
    rand = Math.round(random(1,4))
    if(frameCount %80 == 0){
        thunderframe = frameCount
        thunder = createSprite(random(50,350),random(10,50),10,10)
        switch(rand){
            case 1 : thunder.addImage(thunder1)
            break
            case 2 : thunder.addImage(thunder2)
            break
            case 3 : thunder.addImage(thunder3)
            break
            case 4 : thunder.addImage(thunder4)
            break
        }

    }

    if(thunderframe + 10 == frameCount && thunder){
        thunder.destroy()
    }

    umbrella.display()
    for(var i = 0; i<maxdrops; i++){
        drops[i].display()
        drops[i].updateposition()
    }
    drawSprites()
}   


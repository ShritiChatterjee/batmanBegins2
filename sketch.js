const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var maxDrops = 100;
var drops = [];
var umbrellaMan,umbrellaManImage;
var thunder, thunder1Image,thunder2Image,thunder3Image,thunder4Image;
var rand, thunderCreatedFrame;
function preload()
{
umbrellaManImage = loadImage("images/walking_1.png");	
thunder1Image = loadImage("images/1.png");	
thunder2Image = loadImage("images/2.png");	
thunder3Image = loadImage("images/3.png");	
thunder4Image = loadImage("images/4.png");	
}

function setup() {
	createCanvas(500, 700);
    engine = Engine.create();
	world = engine.world;
    umbrellaMan = createSprite(350,500);
    umbrellaMan.addImage(umbrellaManImage);
    umbrellaMan.scale = 0.5;
 
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,500),random(0,700)))
    }

}

function draw(){
    background("black");
    Engine.update(engine);
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    rand = Math.round(random(1,4));
    if (frameCount%80===0){
        
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch (rand){
            case 1:thunder.addImage(thunder1Image);
            break;
            case 2:thunder.addImage(thunder2Image);
            break;
            case 3:thunder.addImage(thunder3Image);
            break;
            case 4:thunder.addImage(thunder4Image);
            break;
            default:break;
        }
       
        thunder.scale = random(0.3,0.6);
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    

    drawSprites();

    
  
}

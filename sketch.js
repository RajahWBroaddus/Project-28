const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rock, ground, tree, thrower;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var boyImage;

function preload() {
    boyImage = loadImage("boy.png")
}

function setup() {
    createCanvas(1300, 600);
    engine = Engine.create();
    world = engine.world;
    rock = new Stone(235, 420, 30)
    ground = new Ground();
    tree = new Tree(1050, 580)
    mango1 = new Mango(1101, 101, 30);
    mango2 = new Mango(1170, 129, 30);
    mango3 = new Mango(1010, 139, 30);
    mango4 = new Mango(999, 68, 30);
    mango5 = new Mango(198, 70, 30);
    mango6 = new Mango(999, 230, 30);
    mango7 = new Mango(900, 230, 40);
    mango8 = new Mango(1140, 150, 40);
    mango9 = new Mango(1100, 230, 40);
    mango10 = new Mango(1200, 200, 40);
    mango11 = new Mango(1120, 50, 40);
    mango12 = new Mango(900, 160, 40);
    thrower = new Launcher(rock.body, { x: 235, y: 420 })
    Engine.run(engine);
}

function draw() {
    // Engine.update(engine);
    background(100);
    image(boyImage, 200, 340, 200, 300);
    tree.display();
    rock.display();
    ground.display();

    mango1 = new Mango(1100, 100, 30);
    mango2 = new Mango(1170, 130, 30);
    mango3 = new Mango(1010, 140, 30);
    mango4 = new Mango(1000, 70, 30);
    mango5 = new Mango(1100, 70, 30);
    mango6 = new Mango(1000, 230, 30);
    mango7 = new Mango(900, 230, 40);
    mango8 = new Mango(1140, 150, 40);
    mango9 = new Mango(1100, 230, 40);
    mango10 = new Mango(1200, 200, 40);
    mango11 = new Mango(1120, 50, 40);
    mango12 = new Mango(900, 160, 40);

    detectcollision(rock, mango1);
    detectcollision(rock, mango2);
    detectcollision(rock, mango3);
    detectcollision(rock, mango4);
    detectcollision(rock, mango5);
    detectcollision(rock, mango6);
    detectcollision(rock, mango7);
    detectcollision(rock, mango8);
    detectcollision(rock, mango9);
    detectcollision(rock, mango10);
    detectcollision(rock, mango11);
    detectcollision(rock, mango12);

}

function mouseDragged() {
    Matter.Body.setPosition(rock.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
    thrower.fly();

}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(rock.body, { x: 235, y: 420 })
        thrower.attach(rock.body);
    }
}

function detectcollision(stone, mango) {
    /*var collision = Matter.SAT.collides(lstone,lmango);
    if(collision.collided){
    	console.log("collided");
    	Matter.Body.setStatic(lmango,false);	
    }*/
    mango = mango.body
    stone = stone.body

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
        /*if (distance <= lmango.radius + lstone.radius) {

        Matter.Body.setStatic(mango.body, false);
    }
*/
        /*if (stone.position.x - mango.position.x < stone.width / 2 + mango.width / 2 &&
            mango.position.x - stone.position.x < stone.width / 2 + mango.width / 2 &&
            stone.position.y - mango.position.y < stone.height / 2 + mango.height / 2 &&
            mango.position.y - stone.y < stone.height / 2 + mango.radius / 2) { mango }*/
}

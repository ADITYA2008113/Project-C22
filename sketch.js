var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.gif");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);

	packageSprite = createSprite(width / 40, 30, 5, 5);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.18;

	helicopterSprite = createSprite(width / 2, 170, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 1.1;

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, {
		restitution: 1.0,
		isStatic: true,
	});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 450, width, 10, { isStatic: true });
	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);
	fill(300);
	text("Press Down Arrow to Drop & Press F5 to Restart ", 275, 300);
	
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
	drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  // Look at the hints in the document and understand how to make the package body fall only on
		Matter.Body.setStatic(packageBody, false);
		
	}
}

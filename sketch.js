const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles=[];
var plinkos= [];
var divisions= [];


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(500,600,1000,10);

  var divisionHeight = 100;

  // Create Divisions
  for(var k=0; k<= width ; k=k+80)
  { 

      var dv = new Divisions(k, 550 , 10, divisionHeight);
      divisions.push(dv);
      

  }
  
  // Create Plinkos
  
  for(var j = 40; j <= width ; j = j+50)
  {
    plinkos.push(new Plinko(j, 75, 20));
  }
  for(var j = 15; j <= width-10 ; j = j+50)
  {
    plinkos.push(new Plinko(j, 175, 20));
  }

  
  for(var j = 40; j <= width ; j = j+50)
  {
    plinkos.push(new Plinko(j, 275, 20));
  }

  for(var j = 15; j <= width ; j = j+50)
  {
    plinkos.push(new Plinko(j, 375, 20));
  }

  for(var j = 40; j <= width ; j = j+50)
  {
    plinkos.push(new Plinko(j, 475, 20));
  }

 // Create Particles




  Engine.run(engine);
}

function draw() {
  background(0);  
  ground.display(); 
  Engine.update(engine);
  
  
  for(var k=0; k< plinkos.length ; k++)
  {
    var plinko = plinkos[k];
    
    plinko.display();
  }
 
  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2-10 , width/2+10), 10,10));
  }

  for(var k=0; k< particles.length ; k++)
  {
    var particle = particles[k];
    
    particle.display();
  }
 
  for(var k=0; k< divisions.length ; k++)
  {
    var div = divisions[k];
    
    div.display();
  }
 
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, ground, ball;
//var ventilador1,ventilador2;
var pula;
var angle = 90;

//NOVO
var pendulo;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }
  var ball2_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }
  var ball3_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ball4_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ground_options = {
    isStatic: true
  };

  ground = Bodies.rectangle(0, 350, 400, 20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);
  //RESTRIÇÃO
  pendulo = Matter.Constraint.create({
    pointA: { x: 200, y: 20 },
    bodyB: ball,
    pointB: { x: -10, y: 0 },
    length: 200,
    stiffness: 0.01
  });


  ball2 = Bodies.circle(100, 20, 20, ball_options);
  World.add(world, ball);
  //RESTRIÇÃO
  pendulo = Matter.Constraint.create({
    pointA: { x: 200, y: 20 },
    bodyB: ball,
    pointB: { x: -10, y: 0 },
    length: 200,
    stiffness: 0.01
  });

  ball3 = Bodies.circle(100, 30, 20, ball_options);
  World.add(world, ball);
  //RESTRIÇÃO
  pendulo = Matter.Constraint.create({
    pointA: { x: 200, y: 20 },
    bodyB: ball,
    pointB: { x: -10, y: 0 },
    length: 200,
    stiffness: 0.01
  });

  ball4 = Bodies.circle(100, 40, 20, ball_options);
  World.add(world, ball);
  //RESTRIÇÃO
  pendulo = Matter.Constraint.create({
    pointA: { x: 200, y: 20 },
    bodyB: ball,
    pointB: { x: -10, y: 0 },
    length: 200,
    stiffness: 0.01
  });


  World.add(world, pendulo);

  /*
  ground1 = Bodies.rectangle(200,200,100,20,ground_options);
  World.add(world,ground);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  */

  //ventilador1 = new ventilador(100,100,100,20);
  //ventilador2 = new ventilador(300,100,100,50);

  pula = createImg("pula.png");
  pula.position(350, 30);
  pula.size(50, 50);
  pula.mouseClicked(empurrar);


}


function draw() {
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20);
  ellipse(ball2.position.x, ball2.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20);
  ellipse(ball3.position.x, ball3.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20);
  ellipse(ball4.position.x, ball4.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20);
  line(pendulo.pointA.x, pendulo.pointA.y, ball.position.x, ball.position.y);
  line(pendulo.pointA.x, pendulo.pointA.y, ball2.position.x, ball2.position.y);
  line(pendulo.pointA.x, pendulo.pointA.y, ball3.position.x, ball3.position.y);
  line(pendulo.pointA.x, pendulo.pointA.y, ball4.position.x, ball4.position.y);


  /*//rotação
  Matter.Body.rotate(ground1,angle)
  push();//pendulotruir
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,200,20);
  pop();//destruindo
   
  angle += 0.1;
*/
  //ventilador1.rotacao();
  //ventilador2.rotacao();

  console.log(ground.position.y);

}

function empurrar() {
  Matter.Body.applyForce(ball, { x: 10, y: 0 }, { x: 0.5, y: 0 });
  Matter.Body.applyForce(ball2, { x: 10, y: 0 }, { x: 0.5, y: 0 });
  Matter.Body.applyForce(ball3, { x: 10, y: 0 }, { x: 0.5, y: 0 });
  Matter.Body.applyForce(ball4, { x: 10, y: 0 }, { x: 0.5, y: 0 });
}
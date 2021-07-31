let w1 = 0;
let lum = 0;
let num;
let swarm = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  num = height;
  for (let i = 0; i < num; i++) {
    swarm.push(new Firefly());
  }
}

function draw() {
  // background(0);
  for(let i=0; i < swarm.length; i++){
    swarm[i].run();
  }
    push();
    translate(map(mouseX, 0, width, -width/2, width/2), 
    map(mouseY, 0, height, -height/2, height/2), 0);
    noStroke();
    // strokeWeight(random(5, 10));
    // stroke(random(50,100), random(30), 100, lum);
    fill(random(50,100), random(30), 100, 10);
    circle(0, 0, w1);
    w1 += 1;
    lum += 0.5;



  if (w1 >= windowWidth*1.25){
    w1 = 0;
    background(0);
  }

  if (lum == 100){
    lum = 0;
  }
}

class Firefly{
  constructor(){
    this.loc = createVector(0, 0, 0);
    this.vel = createVector(0, 0, 0);
    this.ts = random(5);
    this.lum = 100;
  }

  run(){
    this.relight();
    this.update();
    this.display();
  }

  update(){
    this.a = p5.Vector.random3D();
    this.a.mult(random(3));
    this.vel.add(this.a);
    this.vel.limit(this.ts);
    this.loc.add(this.vel);
    this.lum -= 1;
  }
  
  display(){
    push();
    fill(random(70,130), 100, 100, this.lum);
    noStroke()
    translate(this.loc);
    plane(random(3), random(3));
    pop();
    }
  
  relight(){
    if (this.lum <= 0){
      this.lum = 100;
    }
  }
}

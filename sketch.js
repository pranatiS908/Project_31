var divisionHeight=300

function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
  var particles=[]
  var plinkos=[]
  var divisions=[]
  
}

function draw() {
  background(255,255,255);  
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75))
  }
  for(var j=15;j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175))
  }
  for(var j=10;j<=width-15; j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=5;j<=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,375))
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var j = 0; j<particles.leangth; j++){
    particles[j].display();
  }
   for (var k = 0; k<divisions.leangth; k++){
    divisions[k].display();
  }
  for (var i=0; i<plinkos.leangth; i++){
    plinkos[i].display();
  }
  drawSprites();
}
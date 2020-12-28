document.getElementById("text").innerHTML = "Incrementa el slider y da click para cambiar el color";

function setup(){
createCanvas(1280, 700, WEBGL);
detailX = createSlider(3, 24, 3);
detailX.position(10, 20);
detailX.style('width', '80px');
}

let preset = 0;

 function draw(){
   background(100, 200, 190);
   fill(preset);
   orbitControl();
   rotateX(millis()/1000);
   rotateY(millis()/1000);
   torus(100, 90, detailX.value(), 12);
}
 function mouseClicked(){
   if (preset === 0){
     preset = random(255);
   } else{
     preset = random(255);
   }
 }

var mic;
var button;
var sampleVol = [];
var volHistory = [];
var time = 0;
var micEnabled = false;
 


function toggleMic() {
 
  if (mic.enabled != true) {
    micEnabled = true;
    mic.start();
    console.log('mic enabled');
    //setTimeout(texte1, 2000);
    //setTimeout(texte2, 4000);
  }
  
  else if (micEnabled) {
    micEnabled = false;
    //mic.stop();
    volHistory.push(sampleVol);
    console.log(volHistory);
    console.log('mic disabled');
    //mic.enabled = false;
    
  } 
  
  else{
    micEnabled = true;
    console.log('mic enabled'); n

  }
}

/*
function texte1(){
  document.write('demain dès laube');
}

function texte2(){
  document.write('je partirai');
}
*/


function setup() {
  createCanvas(1200, 200);
  mic = new p5.AudioIn();
  button = createButton('on/off');
  button.mousePressed(toggleMic);
  //mic.start();
}

function draw() {
  background(0);
  if(mic.enabled == true){
    time = time+1;
  }
  
  var vol = mic.getLevel();
  //ellipse(100, 100, 200, vol * 200);
  //console.log(vol);
  fill('red');
  stroke(255);


  if(micEnabled){
    sampleVol.push(vol);
  }

  
  beginShape();
  for (var i = 0;  i < sampleVol.length; i++){
    var y = map(sampleVol[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();

  if (sampleVol.length > width){
    sampleVol.splice(0,1);
  }



if (time == 0){
  let toShow = document.querySelector("ul li:nth-child(1)");
  toShow.style.display = "block";
  //document.write('demain dès laube  -');
  console.log(time);
}
else if (time == 200){
  let toHide = document.querySelector("ul li:nth-child(1)");
  let toShow = document.querySelector("ul li:nth-child(2)");
  toHide.style.display = "none";
  toShow.style.display = "block";
  console.log(time);
}

else if(time == 400){
  let toHide = document.querySelector("ul li:nth-child(2)");
  let toShow = document.querySelector("ul li:nth-child(3)");
  toHide.style.display = "none";
  toShow.style.display = "block";
  console.log(time);
}

else if(time == 600){
  let toHide = document.querySelector("ul li:nth-child(3)");
  let toShow = document.querySelector("ul li:nth-child(4)");
  toHide.style.display = "none";
  toShow.style.display = "block";
  console.log(time);
}

else if(time == 800){
  let toHide = document.querySelector("ul li:nth-child(4)");
  let toShow = document.querySelector("ul li:nth-child(5)");
  toHide.style.display = "none";
  toShow.style.display = "block";
  console.log(time);
}

else if(time == 1000){
  let toHide = document.querySelector("ul li:nth-child(5)");
  let toShow = document.querySelector("ul li:nth-child(6)");
  toHide.style.display = "none";
  toShow.style.display = "block";
  console.log(time);
}

}
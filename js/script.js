//Show Text

function showText() {
  document.getElementById('st').innerHTML = "Hello there";
}

function showTextDd() {
  document.getElementById('std').innerHTML = "Hello there";
}

function showTextOms() {
  document.getElementById('stoms').innerHTML = "Hello there";
}

function showTextoml() {
  document.getElementById('stoml').innerHTML = "Hello there";
}

function showTextomo() {
  document.getElementById('stomo').innerHTML = "Hello there";
}

function showDate() {
  document.getElementById('sd').innerHTML =Date();
}

function changeText() {
  document.getElementById('ct').innerHTML =Date();
}

//bulb on/off
function bulbOn(){
  document.getElementById('img').src="images/on.gif";
}
function bulbOff(){
  document.getElementById('img').src="images/off.gif";
}

//bulb on/off
function redCar(){
  document.getElementById('car').src="images/red.jpg";
}
function blueCar(){
  document.getElementById('car').src="images/blue.png";
}

function changeCss(){
  document.getElementById("cc").style.color="red";
}

function changeCssFont(){
  document.getElementById("cs").style.fontSize="60px";
}


//bulb on/off
function cShow(){
  document.getElementById('sh').style.display="block";
}
function cHide(){
  document.getElementById('sh').style.display="none";
}

function cValu(){
  document.getElementById("jv").innerHTML=(5+6)*10;
}

function cVal(){
  let x, y;
  x = 5;
  y = 6;
  document.getElementById("je").innerHTML=x+y;
}

function changeColor() {
    document.body.style.backgroundColor = "red";
}



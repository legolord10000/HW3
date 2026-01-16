const canvas = document.getElementById("gameCanvas");
const pencil = canvas.getContext("2d");

const dayButton = document.getElementById("dayButton");
const nightButton = document.getElementById("nightButton");
const sunButton = document.getElementById("sunButton");
const moonButton = document.getElementById("moonButton");
const grassButton = document.getElementById("grassButton"); 
const boulderButton = document.getElementById("boulderButton"); 
const houseButton = document.getElementById("houseButton"); 
const signButton = document.getElementById("signButton"); 



function drawDay() {
pencil.fillStyle = 'skyBlue'
pencil.fillRect(0,0, canvas.width, canvas.height)
}
dayButton.addEventListener('click', drawDay);



function drawNight() {
pencil.fillStyle = 'black'
pencil.fillRect(0,0, canvas.width, canvas.height)
}
nightButton.addEventListener('click', drawNight);


function drawSun() {
  pencil.beginPath();  
  pencil.fillStyle = 'yellow';
  pencil.arc(100, 100, 50, 0, Math.PI * 2);
  pencil.fill();
}
sunButton.addEventListener('click', drawSun);


function drawMoon() {
  pencil.beginPath();  
  pencil.fillStyle = 'grey';
  pencil.arc(500, 100, 50, 0, Math.PI * 2);
  pencil.fill();
  pencil.beginPath();
  pencil.fillStyle = 'black';
  pencil.arc(525, 100, 50, 0, Math.PI * 2);
  pencil.fill();
}
moonButton.addEventListener('click', drawMoon);


function drawGrass() {
  pencil.fillStyle = 'limegreen';
  pencil.fillRect(0, 300, canvas.width, 100);
}
grassButton.addEventListener('click', drawGrass);


function drawBoulder() {
  pencil.beginPath();  
  pencil.fillStyle = 'gray';
  pencil.moveTo(350, 275);
  pencil.bezierCurveTo(390, 255, 440, 305, 400, 315);
  pencil.bezierCurveTo(340, 345, 320, 285, 350, 275);
  pencil.fill();
}
boulderButton.addEventListener('click', drawBoulder);

function drawHouse() {
  pencil.fillStyle = 'yellow';
  pencil.fillRect(200, 235, 125, 90);
  pencil.fillStyle = 'purple';
  pencil.fillRect(250, 275, 25, 50);
  pencil.fillStyle = 'gray';
  pencil.fillRect(250, 325, 25, 75);
  pencil.fillStyle = 'purple';
  pencil.fillRect(215, 285, 25, 25);
  pencil.fillStyle = 'purple';
  pencil.fillRect(285, 285, 25, 25);
  pencil.fillStyle = 'yellow';
  pencil.fillRect(215, 175, 25, 50);
  
  pencil.fillStyle = 'red';
  pencil.beginPath();
  pencil.moveTo(350, 250); 
  pencil.lineTo(265, 175);
  pencil.lineTo(175, 250);
  pencil.closePath();
  pencil.fill();
}
houseButton.addEventListener('click', drawHouse);

function drawSign() {
  pencil.fillStyle = 'gray';
  pencil.fillRect(215, 350, 15, 50);
  pencil.fillStyle = 'green';
  pencil.fillRect(200, 350, 45, 15);
}
signButton.addEventListener('click', drawSign);

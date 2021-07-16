var char = document.getElementById("char");
var salud = document.getElementById("health");
var materials = document.getElementById("game");
var note = document.getElementById("note");

materials.innerHTML = "0";
char.style.left = "50%";
salud.style.width = "100%";

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
// jump functions
document.body.onkeyup = function(e){  
    if(e.keyCode == 32){
        jump(); setTimeout(gravity, 500);
    } else if (e.keyCode == 37) {
        left();
    } else if (e.keyCode == 39) {
        right();
    } else if (e.keyCode == 49) {
        smile();
    } else if (e.keyCode == 50) {
        frown();
    } else if (e.keyCode == 73) {
        about();
    } else if (e.keyCode == 81) {
        quit();
    } else if (e.keyCode == 66) {
        build();
    }
}
function jump() {
char.style.bottom = "200px";
}
function gravity() {
char.style.bottom = "100px";
}

function left() {
var pos = char.style.left.split("%")[0];
var newPos = +pos - 5;
char.style.left = newPos + "%";
}
function right() {
var rightPos = char.style.left.split("%")[0];
var newrightPos = +rightPos + 5;
char.style.left = newrightPos + "%";
}
function smile() {
char.innerHTML = "..<br><span style='font-size: 25px;'>&UnderParenthesis;</span>";
char.style.background = "red";
char.style.color = "black";
}
function frown() {
char.innerHTML = "..<br>_";
char.style.background = "blue";
char.style.color = "white";
}
function about() {
window.open("https://lb123658.github.io/unkrafted/game", "_blank");
}
function quit() {
document.body.innerHTML = "<br><br><br><br><h1>Game over</h1><br><br><button onclick='location.reload();' id='over'>Play Again</button";
document.body.style.background = "#282828";
document.body.style.userSelect = "none";
document.body.style.textAlign = "center";
}

//health stuff
setInterval(health, 100);

function health() {
  if (salud.style.width.split("%")[0] < 1) {
    quit();
  } else if (salud.style.width.split("%")[0] < 40) {
    salud.innerHTML = "Low"
    salud.style.background = "red";
  } else {
    salud.style.background = "#19bd44";
  }
}
// lose health
function injure() {
var width = salud.style.width.split("%")[0];
var newWidth = +width - 10;
salud.style.width = newWidth + "%";
salud.innerHTML = "Health: " + newWidth;
}

// increase resources
function resources() {
materials.innerHTML = +materials.innerHTML + 1;
}

// build function
function build() {
  if (materials.innerHTML < "2") {
    say("You do not have enough materials to build");
  } else {
    var cube = document.createElement("div");
    cube.style.zIndex = "-1";
    cube.style.position = "absolute";
    cube.style.width = "50px";
    cube.style.height = "50px";
    cube.style.marginLeft = "-25px";
    cube.style.bottom = "100px";
    cube.style.background = "brown";
    cube.style.left = char.style.left;
    document.body.appendChild(cube);
    materials.innerHTML = +materials.innerHTML - 2;
  }
}

// lose health from dropping bomb
setInterval(drop, 10000);

function drop() {
  if (char.style.left == "50%") {
    injure();
  } else {
    ;
  }
}

// get resources from middle
setInterval(getResources, 1500);

function getResources() {
  if (char.style.left == "50%") {
    resources();
  } else {
    ;
  }
}

// increase health at night
setInterval(revive, 120000);

function revive() {
salud.style.width = "100%";
salud.innerHTML = "Health increased...";
}

// notify function
function say(phrase) {
  note.innerHTML = phrase;
  setTimeout(function() { note.innerHTML = ""; }, 2000);
}

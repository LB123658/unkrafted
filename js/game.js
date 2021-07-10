function makeCircle(diameter,color) {
var crcl = document.createElement("DIV");
crcl.style.height = diameter;
crcl.style.width = diameter;
crcl.style.background = color;
crcl.style.borderRadius = "50%";
document.body.appendChild(crcl);
}
function makeSquare(side,color) {
var sqr = document.createElement("DIV");
sqr.style.height = side;
sqr.style.width = side;
sqr.style.background = color;
document.body.appendChild(sqr);
}

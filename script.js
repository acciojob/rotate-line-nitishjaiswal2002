//your JS code here. If required.
const line=document.getElementById("line");
let angle=0;
function rotateline() {
	angle=angle+2;
	line.style.transform=`translate(-50%,-50%)rotate(${angle}deg)`;
}
setInterval(rotateline,20);
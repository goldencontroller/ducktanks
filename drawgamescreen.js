Graphical.unit_type = "vmin";
Graphical.drawRect(document.body, "gamescreen", 100, 100, 50, 50, "#4EA5B5");
Graphical.drawRect(document.getElementById("gamescreen"), "topbound", 100, 0, 50, 0, "red");
Graphical.drawRect(document.getElementById("gamescreen"), "leftbound", 0, 100, 0, 50, "red");
Graphical.drawRect(document.getElementById("gamescreen"), "bottombound", 100, 0, 50, 100, "red");
Graphical.drawRect(document.getElementById("gamescreen"), "rightbound", 0, 100, 100, 50, "red");
document.getElementById("topbound").setAttribute("class", "clip")
document.getElementById("leftbound").setAttribute("class", "clip")
document.getElementById("bottombound").setAttribute("class", "clip")
document.getElementById("rightbound").setAttribute("class", "clip")
function repos() {
	if (window.innerWidth > window.innerHeight) {
		document.getElementById("gamescreen").style.top = "0";
		document.getElementById("gamescreen").style.left = (window.innerWidth/2 - window.innerHeight/2).toString() + "px";
	}
	else {
		document.getElementById("gamescreen").style.left = "0";
		document.getElementById("gamescreen").style.top = (window.innerHeight/2 - window.innerWidth/2).toString() + "px";
	}
}
repos();
window.addEventListener("resize", repos);

function dispScore() {
	document.getElementById("scoreboard").innerText = "P1 SCORE: " + p1money.toString() + "\nP2 SCORE: " + p2money.toString();
}
function drawBlueDuck(x, y, angle) {
	Graphical.drawSprite(document.getElementById("gamescreen"), "blueduck", 5, 10, x, y, "duck_spritesheet.png", 20, 10, 0, 0);
	document.getElementById("blueduck").style.transform = "rotate(" + (90 - angle).toString() + "deg)";
	Graphical.drawRect(document.getElementById("gamescreen"), "blueduckhitbox", 5, 5, x, y, "");
}
function drawRedDuck(x, y, angle) {
	Graphical.drawSprite(document.getElementById("gamescreen"), "redduck", 5, 10, x, y, "duck_spritesheet.png", 20, 10, 0, -5);
	document.getElementById("redduck").style.transform = "rotate(" + (90 - angle).toString() + "deg)";
	Graphical.drawRect(document.getElementById("gamescreen"), "redduckhitbox", 5, 5, x, y, "");
}
function drawGreenDuck(x, y, angle) {
	Graphical.drawSprite(document.getElementById("gamescreen"), "greenduck", 5, 10, x, y, "duck_spritesheet.png", 20, 10, 0, -10);
	document.getElementById("greenduck").style.transform = "rotate(" + (90 - angle).toString() + "deg)";
	Graphical.drawRect(document.getElementById("gamescreen"), "greenduckhitbox", 5, 5, x, y, "");
}
function drawPurpleDuck(x, y, angle) {
	Graphical.drawSprite(document.getElementById("gamescreen"), "purpleduck", 5, 10, x, y, "duck_spritesheet.png", 20, 10, 0, -15);
	document.getElementById("purpleduck").style.transform = "rotate(" + (90 - angle).toString() + "deg)";
	Graphical.drawRect(document.getElementById("gamescreen"), "purpleduckhitbox", 5, 5, x, y, "");
}

function moveBlueDuck(angle) {
	speed = 0.1;
	p1[0] += speed * Math.cos(angle * Math.PI / 180);
	p1[1] -= speed * Math.sin(angle * Math.PI / 180);
	drawBlueDuck(p1[0], p1[1], p1[2]);
	for (i = 0; i < document.getElementsByClassName("clip").length; i++) {
		if (Graphical.rectCollision(document.getElementById("blueduckhitbox"), document.getElementsByClassName("clip")[i])) {
			speed = -0.1;
			p1[0] += speed * Math.cos(angle * Math.PI / 180);
			p1[1] -= speed * Math.sin(angle * Math.PI / 180);
			break;
		}
	}
}

function moveRedDuck(angle) {
	speed = 0.1;
	p2[0] += speed * Math.cos(angle * Math.PI / 180);
	p2[1] -= speed * Math.sin(angle * Math.PI / 180);
	drawRedDuck(p2[0], p2[1], p2[2]);
	for (i = 0; i < document.getElementsByClassName("clip").length; i++) {
		if (Graphical.rectCollision(document.getElementById("redduckhitbox"), document.getElementsByClassName("clip")[i])) {
			speed = -0.1;
			p2[0] += speed * Math.cos(angle * Math.PI / 180);
			p2[1] -= speed * Math.sin(angle * Math.PI / 180);
			break;
		}
	}
}
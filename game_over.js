function gameoverscreennumbertwo() {
	if (map[13]) {
		document.getElementById("gamescreen").innerHTML = "";
		Graphical.drawRect(document.getElementById("gamescreen"), "topbound", 100, 0, 50, 0, "red");
		Graphical.drawRect(document.getElementById("gamescreen"), "leftbound", 0, 100, 0, 50, "red");
		Graphical.drawRect(document.getElementById("gamescreen"), "bottombound", 100, 0, 50, 100, "red");
		Graphical.drawRect(document.getElementById("gamescreen"), "rightbound", 0, 100, 100, 50, "red");
		document.getElementById("topbound").setAttribute("class", "clip");
		document.getElementById("leftbound").setAttribute("class", "clip");
		document.getElementById("bottombound").setAttribute("class", "clip");
		document.getElementById("rightbound").setAttribute("class", "clip");
		SFX.playmusic("bgmusic.mp3");
		Graphical.drawRect(document.getElementById("gamescreen"), "blackscreen", 100, 100, 50, 50, "black");
		Graphical.drawImg(document.getElementById("gamescreen"), "startscreen", 100, 100, 50, 50, "titlescreen.jpg");
		document.addEventListener("keydown", keyfunc);
		k = "";
		mainmenu();
	}
	else {
		setTimeout(gameoverscreennumbertwo, 1);
	}
}

function gameoverscreen() {
	SFX.stopmusic();
	SFX.playsound("youjustgotpwned.mp3");
	if (p1money > p2money) {
		Graphical.drawSprite(document.getElementById("gamescreen"), "endscreen", 64, 40, 50, 50, "endscreen.jpg", 64, 120, 0, 0);
	}
	else if (p2money > p1money) {
		Graphical.drawSprite(document.getElementById("gamescreen"), "endscreen", 64, 40, 50, 50, "endscreen.jpg", 64, 120, -40, 0);
	}
	else {
		Graphical.drawSprite(document.getElementById("gamescreen"), "endscreen", 64, 40, 50, 50, "endscreen.jpg", 64, 120, -80, 0);
	}
	setTimeout(gameoverscreennumbertwo, 1);
}
Graphical.drawRect(document.getElementById("gamescreen"), "blackscreen", 100, 100, 50, 50, "black")
Graphical.drawImg(document.getElementById("gamescreen"), "logoimage", 100, 100, 50, 50, "logoimage.jpg");
count = 0;
keyfunc = function(){ k = event.key; console.log(k); };
k = "";
selection = 0;
function intro() {
	
	if ( count < 2020 ) {
		count++;
		setTimeout(intro, 1);
	}
	else {
		SFX.playmusic("bgmusic.mp3");
		Graphical.drawImg(document.getElementById("gamescreen"), "startscreen", 100, 100, 50, 50, "titlescreen.jpg");
		document.addEventListener("keydown", keyfunc);
		mainmenu();
		document.getElementById("logoimage").remove();
	}
	
}
function actuallyStartTheGame() {
	document.removeEventListener("keydown", keyfunc);
	document.getElementById("startscreen").remove();
	document.getElementById("blackscreen").remove();
	var mainscript = document.createElement("script");
	mainscript.src = "main.js";
	SFX.stopmusic();
	SFX.playmusic("bgmusic.mp3");
	document.body.appendChild(mainscript);
}
function creditsscreen() {
	if (k == "Enter") {
		k = "";
		document.getElementById("startscreen").style.backgroundImage = "url('titlescreen.jpg')";
		mainmenu();
	}
	else { setTimeout(creditsscreen, 1); }
}
function mainmenu() {
	Graphical.drawSprite(document.getElementById("startscreen"), "menu_select", 64, 32, 60, 50, "menuscroll.png", 64, 96, -(32 * selection), 0);
	if (k == "Enter") {
		k = "";
		if (selection == 0) {
			document.getElementById("startscreen").style.animation = "fadeout 1s";
			setTimeout(actuallyStartTheGame, 999);
		}
		else if (selection == 1) {
			document.getElementById("startscreen").style.backgroundImage = "url('controls.jpg')";
			document.getElementById("menu_select").remove();
			creditsscreen();
		}
		else if (selection == 2) {
			document.getElementById("startscreen").style.backgroundImage = "url('credits.jpg')";
			document.getElementById("menu_select").remove();
			creditsscreen();
		}
	}
	else {
		setTimeout(mainmenu, 1);
	}
	if (k == "ArrowDown" && selection < 2) {
		k = "";
		selection++;
	}
	else if (k == "ArrowUp" && selection > 0) {
		k = "";
		selection -= 1;
	}
}
intro();
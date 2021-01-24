millisToMinutesAndSeconds = function(millis) { var minutes = Math.floor(millis / 60000); var seconds = ((millis % 60000) / 1000).toFixed(0); return minutes + ":" + (seconds < 10 ? '0' : '') + seconds; }

drawmap(Math.floor(Math.random() * 3) + 1);
generateMoney("moneycontainer1");
generateMoney("moneycontainer2");
generateMoney("moneycontainer3");
generateMoney("moneycontainer4");

map = {};

p1 = [5, 5, 0]; // [x, y, angle]
p2 = [95, 95, 180]; // [x, y, angle]
p1money = 0;
p2money = 0;

frame_count = 0;
gameover = false;

Graphical.drawRect(document.getElementById("gamescreen"), "scoreboard", 100, 20, 50, 10, "");
dispScore();
Graphical.drawRect(document.getElementById("gamescreen"), "clock", 100, 5, 50, 97.5, "");

time_left = 5 * 60 * 1000;
document.getElementById("clock").innerText = " TIME LEFT: " + millisToMinutesAndSeconds(time_left);

function updateClock() { time_left = time_left - 1000; document.getElementById("clock").innerText = " TIME LEFT: " + millisToMinutesAndSeconds(time_left); if (time_left > 0) { setTimeout(updateClock, 1000); } else { gameover = true; } }
setTimeout(updateClock, 1000);

SFX.playmusic("bgmusic.mp3");

function main() {

	onkeydown = onkeyup = function(e){
		e = e || event;
		map[e.keyCode] = e.type == 'keydown';
	}
	
	drawBlueDuck(p1[0], p1[1], p1[2]);
	drawRedDuck(p2[0], p2[1], p2[2]);
	
	if (map[37]) {
		p2[2] += 1;
	}
	else if (map[39]) {
		p2[2] -= 1;
	}
	else {
		moveRedDuck(p2[2]);
		if (frame_count % 100 == 0) { drawbullet(p2[0], p2[1], p2[2], "#800000"); }
	}
	
	if (map[65]) {
		p1[2] += 1;
	}
	else if (map[68]) {
		p1[2] -= 1;
	}
	else {
		moveBlueDuck(p1[2]);
		if (frame_count % 100 == 0) { drawbullet(p1[0], p1[1], p1[2], "#008080"); }
	}
	
	updateBullets();
	detect_money_collision();
	
	frame_count++;
	if (gameover) { gameoverscreen(); } else { setTimeout(main, 1); }
}
main();
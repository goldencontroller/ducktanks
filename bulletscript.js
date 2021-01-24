bullet_count = 0;

function drawbullet(x, y, angle, color) {
	bullet = Graphical.drawEllipse(document.getElementById("gamescreen"), "bullet" + bullet_count.toString(), 0.5, 0.5, x, y, color);
	bullet.setAttribute("class", "bullet");
	bullet.dataset.angle = angle;
	bullet.dataset.x = x;
	bullet.dataset.y = y;
	bullet.dataset.color = color;
	bullet_count++;
}

function updateBullets() {
	speed = 0.5;
	i = 0;
	while (i < document.getElementsByClassName("bullet").length) {
		bullet = document.getElementsByClassName("bullet")[i];
		canshoot = true;
		for (j = 0; j < document.getElementsByClassName("clip").length; j++) {
			if (Graphical.rectCollision(bullet, document.getElementsByClassName("clip")[j])) {
				canshoot = false;
				break;
			}
		}
		if (canshoot) {
			if (bullet.dataset.color == "#800000" && Graphical.rectCollision(bullet, document.getElementById("blueduckhitbox"))) {
				temp = [parseFloat(p1[0].toString()), parseFloat(p1[1].toString())];
				p1 = [5, 5, 0];
				drawBlueDuck(p1[0], p1[1], p1[2]);
				drawCoin(temp[0], temp[1]);
				SFX.playsound("death.mp3");
				bullet.remove();
			}
			else if (bullet.dataset.color == "#008080" && Graphical.rectCollision(bullet, document.getElementById("redduckhitbox"))) {
				temp = [parseFloat(p2[0].toString()), parseFloat(p2[1].toString())];
				p2 = [95, 95, 180];
				drawRedDuck(p2[0], p2[1], p2[2]);
				drawCoin(temp[0], temp[1]);
				SFX.playsound("death.mp3");
				bullet.remove();
			}
			else {
				x = parseFloat(bullet.dataset.x);
				y = parseFloat(bullet.dataset.y);
				angle = parseFloat(bullet.dataset.angle);
				x += speed * Math.cos(angle * Math.PI / 180);
				y -= speed * Math.sin(angle * Math.PI / 180);
				Graphical.drawEllipse(document.getElementById("gamescreen"), bullet.id, 0.5, 0.5, x, y, bullet.dataset.color);
				bullet.dataset.x = x;
				bullet.dataset.y = y;
				i++;
			}
		}
		else {
			bullet.remove();
		}
	}
}
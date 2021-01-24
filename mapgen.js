function drawmap(map_index) {
	if ( map_index == 1 ) {
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks1", 60, 10, 30, 15, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks2", 60, 10, 70, 85, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks3", 60, 10, 70, 35, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks4", 60, 10, 30, 65, "");
		brick.setAttribute("class", "clip");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer1", 9, 4, 20, 50, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer2", 9, 4, 40, 50, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer3", 9, 4, 60, 50, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer4", 9, 4, 80, 50, "");
	}
	if ( map_index == 2 ) {
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks1", 20, 10, 10, 15, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks2", 20, 10, 90, 85, "");
		brick.setAttribute("class", "clip");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer1", 9, 4, 40, 45, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer2", 9, 4, 40, 55, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer3", 9, 4, 60, 45, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer4", 9, 4, 60, 55, "");
	}
	if ( map_index == 3 ) {
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks1", 30, 10, 15, 15, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks2", 30, 10, 85, 85, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks3", 30, 10, 15, 85, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks4", 30, 10, 85, 15, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks5", 20, 10, 25, 35, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks6", 20, 10, 75, 65, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks7", 20, 10, 75, 35, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks8", 20, 10, 25, 65, "");
		brick.setAttribute("class", "clip");
		brick = Graphical.drawRect(document.getElementById("gamescreen"), "bricks9", 10, 10, 50, 50, "");
		brick.setAttribute("class", "clip");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer1", 9, 4, 40, 45, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer2", 9, 4, 40, 55, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer3", 9, 4, 60, 45, "");
		Graphical.drawRect(document.getElementById("gamescreen"), "moneycontainer4", 9, 4, 60, 55, "");
	}
}
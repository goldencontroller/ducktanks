function generateMoney(id_of_moneycontainer) {
	try {
		let money = document.getElementById(id_of_moneycontainer).cloneNode( true );
		money.id = id_of_moneycontainer.split("container")[0] + id_of_moneycontainer.split("container")[1];
		money.setAttribute("class", "money");
		money.style.backgroundImage = "url('money.jpg')";
		money.style.backgroundSize = "100% 100%";
		document.getElementById("gamescreen").appendChild(money);
	}
	catch(err) {  }
}

function drawCoin(x, y) {
	money = Graphical.drawImg(document.getElementById("gamescreen"), "moneymoneymoney", 9, 4, x, y, "money.jpg");
	money.removeAttribute("id");
	money.setAttribute("class", "money");
}

function detect_money_collision() {
	i = 0;
	while ( i < document.getElementsByClassName("money").length ) {
		
		if (Graphical.rectCollision(document.getElementsByClassName("money")[i], document.getElementById("blueduckhitbox"))) {
			if (document.getElementsByClassName("money")[i].id == "money1" || document.getElementsByClassName("money")[i].id == "money2" || document.getElementsByClassName("money")[i].id == "money3" || document.getElementsByClassName("money")[i].id == "money4") {
				moneyindex = document.getElementsByClassName("money")[i].id.split("money")[1];
				setTimeout(generateMoney, 25000, "moneycontainer" + moneyindex);
			}
			document.getElementsByClassName("money")[i].remove();
			p1money++;
			SFX.playsound("getcoin.mp3");
			dispScore();
		}
		else if (Graphical.rectCollision(document.getElementsByClassName("money")[i], document.getElementById("redduckhitbox"))) {
			if (document.getElementsByClassName("money")[i].id == "money1" || document.getElementsByClassName("money")[i].id == "money2" || document.getElementsByClassName("money")[i].id == "money3" || document.getElementsByClassName("money")[i].id == "money4") {
				moneyindex = document.getElementsByClassName("money")[i].id.split("money")[1];
				setTimeout(generateMoney, 25000, "moneycontainer" + moneyindex);
			}
			document.getElementsByClassName("money")[i].remove();
			p2money++;
			SFX.playsound("getcoin.mp3");
			dispScore();
		}
		else {
			i++;
		}
	}
}
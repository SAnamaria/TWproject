function formular() {
	var div = document.getElementById("formatting");
	div.style.visibility = "visible";
	div.style.position = "absolute";
}

function hide() {
	var div = document.getElementById("formatting");
	div.style.visibility = "hidden";
}

function formatare() {
	var culoare = document.getElementById("option_background").value;
	var marime = document.getElementById("size").value;
	document.body.style.backgroundColor = culoare;
	document.getElementById('text-size').style.fontSize = marime + "px";
	hide();
}

/* RESTRICTING FONT SIZE */

function timeout() {
	setTimeout(restrictedNumbers(), 3000);
}

function restrictedNumbers() {
	var marime = document.getElementById("size").value;
	if (marime < 12 || marime > 25) alert("Marimea trebuie sa fie intre 12 - 25");
	return;
}
/* MUZICA DE FUNDAL - nu merge in Chrome */
function playAudio(url) {
	var melodie = new Audio(url);
	melodie.play();
}
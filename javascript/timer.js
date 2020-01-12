function startTime() {
	var today = new Date();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	// add a zero in front of numbers<10
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	document.getElementById("timer").innerHTML = hour + ":" + minutes + ":" + seconds;
	var timer = setTimeout(function() {
		startTime()
	}, 500);
}

function checkTime(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}
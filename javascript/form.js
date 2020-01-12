function showValue1(newValue) {
	document.getElementById("varsta").innerHTML = newValue;
}

function showValue2(newValue) {
	document.getElementById("size").innerHTML = newValue;
}

function changeRangeValue1(val) {
	document.getElementById("range").value = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
	showValue1(val);
}

function changeInputValue1(val) {
	document.getElementById("number").value = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
	showValue1(val);
}
/* Verificare Nume si Prenume */
function validateLastName() {
	var nume = document.forms["inregistrare"]["nume"].value;
	if (nume == "") {
		alert("Introduecti numele!");
		document.getElementById("nume").focus();
		return false;
	}
	if (!/^[a-zA-Z\s]*$/g.test(nume)) {
		alert("Invalid characters");
		document.getElementById("nume").focus();
		return false;
	}
}

function validateName() {
	var prenume = document.forms["inregistrare"]["prenume"].value;
	if (prenume == "") {
		alert("Introduceti prenumele!");
		document.getElementById("prenume").focus();
		return false;
	}
	if (!/^[a-zA-Z\s]*$/g.test(prenume)) {
		alert("Invalid characters");
		document.getElementById("prenume").focus();
		return false;
	}
}
/* Verificare varsta */
function timeoutAge() {
	setTimeout(restrictedAge(), 3000);
}

function restrictedAge() {
	var varsta = document.getElementById("number").value;
	if (varsta < 18) alert("Trebuie sa aveti 18 ani pentru a inregistra un cont nou!");
	return;
}
/* VERIFICA DACA SE POTRIVESC PAROLELE*/
function matchPass() {
	var password1 = document.getElementById("parola");
	var password2 = document.getElementById("parola-repeat");
	var message = document.getElementById('confirm-message');
	var good_color = "green";
	var bad_color = "red";
	if (password1.value == password2.value) {
		password2.style.backgroundColor = good_color;
		message.style.color = good_color;
		message.innerHTML = 'Parolele se potrivesc!';
	} else {
		password2.style.backgroundColor = bad_color;
		message.style.color = bad_color;
		message.innerHTML = 'Parolele nu se potrivesc!';
	}
}

/* VERIFICA EMAIL? */

function validateEmail() 
{
	var email = document.getElementById("email");
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    alert("Email invalid!")
	email.focus();
    return (false)
}

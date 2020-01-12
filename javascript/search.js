function searchFunction() {
	var input, filter, book, desc;
	input = document.getElementById('myinput');
	filter = input.value.toLowerCase();
	book = document.getElementsByClassName('gallery');
	desc = document.getElementsByClassName('desc');
	for (i = 0; i < book.length; i++) {
		if (desc[i].innerHTML.toLowerCase().includes(filter)) //daca textul cautat face parte din descrierea oricarei carti
			book[i].style.display = "block"; //afiseaza cartea
		else book[i].style.display = "none";
	}
}
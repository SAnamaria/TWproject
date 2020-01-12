/* DOESN'T WORK IN CHROME*/
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		document.getElementById("istoric").style.display = "none";
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "xml/book_catalog.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Autor</th><th>Titlu</th><th>Editura</th><th>An de aparitie</th></tr>";
  var x = xmlDoc.getElementsByTagName("CARTE");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("AUTOR")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLU")[0].childNodes[0].nodeValue +
	"</td><td>" +
    x[i].getElementsByTagName("EDITURA")[0].childNodes[0].nodeValue +
	"</td><td>" +
    x[i].getElementsByTagName("AN")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
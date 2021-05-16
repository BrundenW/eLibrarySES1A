function menu() {
	window.history.back();
}

function add() {
	//hide the error messages
	document.getElementById("error1").hidden = true;
	document.getElementById("error2").hidden = true;


	//grab the variables from textboxes
	var title = document.getElementById("title").value;
	var firstname = document.getElementById("first_name").value;
	var lastname = document.getElementById("last_name").value;
	var genre = document.getElementById("genre").value;
	
	//error if not all textboxes are filled
	if (title == "" || firstname == "" || lastname == "" || genre == "") {
		document.getElementById("error1").hidden = false;
		return;
	}

	document.getElementById("error2").hidden = false;
	document.getElementById("title").value = "";
	document.getElementById("first_name").value = "";
	document.getElementById("last_name").value = "";
	document.getElementById("genre").value = "";

}
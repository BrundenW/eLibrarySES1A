function login() {
	//hide the error message
	document.getElementById("error1").hidden = true;
	document.getElementById("error2").hidden = true;

	//grab the variables from textboxes
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	//error if not all textboxes are filled
	if (username == "" || password == "") {
		document.getElementById("error1").hidden = false;
		return;
	}

	if (username == "admin") {
		window.location.href = "adminMenu.html";
	}
	else if (username == "staff") {
		window.location.href = "staffMenu.html";
	}
	else if (username == "joebloggs") {
		window.location.href = "userMenu.html";
	}
	else {
		document.getElementById("error2").hidden = false;
	}
}
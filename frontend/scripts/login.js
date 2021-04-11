function login() {
	//hide the error message
	document.getElementById("error1").hidden = true;

	//grab the variables from textboxes
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	//error if not all textboxes are filled
	if (username == "" || password == "") {
		document.getElementById("error1").hidden = false;
		return;
	}

	//changes to the login webpage
	//window.location.href = "login.html";
}
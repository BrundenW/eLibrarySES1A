function register() {
	//hide the error messages
	document.getElementById("error1").hidden = true;
	document.getElementById("error2").hidden = true;


	//grab the variables from textboxes
	var firstname = document.getElementById("first_name").value;
	var lastname = document.getElementById("last_name").value;
	var email = document.getElementById("schoolEmail").value;
	var password1 = document.getElementById("password").value;
	var password2 = document.getElementById("confirmPassword").value;
	
	//error if not all textboxes are filled
	if (firstname == "" || lastname == "" || email == "" || password1 == "" || password2 == "") {
		document.getElementById("error1").hidden = false;
		return;
	}

	//error if passwords don't match
	if (password1 != password2) {
		document.getElementById("error2").hidden = false;
		document.getElementById("password").value = "";
		document.getElementById("confirmPassword").value = "";
		return;
	}

	//changes to the login webpage
	window.location.href = "login.html";
}
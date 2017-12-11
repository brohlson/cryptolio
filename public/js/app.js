console.log("It works");

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$('#menu').toggleClass('show');
	});

	    // Modal init 
		$('#login').modal({
			backdrop: "static"
		  })

	// Modal options 
	$('#sign-in-choice').click(function(){
		$('#login-form').toggleClass('show');
		$('#sign-up-form').toggleClass('remove');
		$('#returning').toggleClass('remove');
	});

			// signUp

	$("#sign-up").on("click", function(event){
		var signUpEmail = $("#signUpEmail").val().trim();
		var signUpPW = $("#signUpPass").val().trim();
		event.preventDefault();
		console.log("hi");
		console.log(signUpEmail);
		console.log(signUpPW);
		$.post("/login/signup",{
			email: signUpEmail,
			password: signUpPW
		}).then(function(data){
			if(data.duplicateUser){
				alert("sorry, that email is already in use");
			} else {
				window.location.replace = data.redirect;
			}
		}).catch(function(err){
			console.log(err);
		})
	});

});


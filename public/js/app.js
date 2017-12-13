console.log("It works");

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$('#menu').toggleClass('show');
	});

	// Modal options 
	// $('#sign-in-choice').click(function(){
	// 	$('#login-form').toggleClass('show');
	// 	$('#sign-up-form').toggleClass('remove');
	// 	$('#returning').toggleClass('remove');
	// });

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
			if(data === false){
				alert("sorry, that email is already in use");
			} else {
				window.location.replace = data.redirect;
				$("#signUpEmail").val("");
				$("#signUpPass").val("");
			}
		}).catch(function(err){
			console.log(err);
		})
	});

	$("#login").on("click", function(event){
		var loginEmail = $("#loginEmail").val().trim();
		var loginPW = $("#loginPW").val().trim();
		$.post("/login/login", {
			email: loginEmail,
			password: loginPW
		}).then(function(data){
			window.location.replace(data);
		}).catch(function(err){
			console.log(err);
			// some other feedback that password is incorrect
		});
	})

});


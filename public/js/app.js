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
});


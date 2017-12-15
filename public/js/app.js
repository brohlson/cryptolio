$(document).ready(function(){

    $('#loginModal').modal({
        backdrop: "static"
    })

    $('#signupModal').modal({
        backdrop: "static"
    })


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

	    // Button for Syncing with Coinbase
    $("#coinbase").click(function (event) {
        event.preventDefault();
        console.log("click");
        window.location.replace(
            "https://www.coinbase.com/oauth/authorize?client_id=292d61271cf240147c550bef04ecb2a33fa1c50b4ecb062a8ce4d0562635a0b9&redirect_uri=http%3A%2F%2Flocalhost%3A3005%2F&response_type=code&scope=wallet%3Auser%3Aread"
        );
    });
    // Button for submitting coin
    $("#submitCoin").click(function (event) {
        event.preventDefault();
        var name = $('#coinName').val();
        var qty = $('#coinQty').val();
        var symbol = $('#coinName').find(':selected').attr('data-symbol');
        console.log("Coin: " + name + " Qty: " + qty + " Sym: " + symbol);
        $('#coinName').val('');
        $('#coinQty').val('');


        $.post('/addCoin', {
            coinName: name,
            coinSymbol: symbol,
            numCoins: qty
        }).then(function (data) {
            console.log(data);
            location.reload();
        })
    });

    $.get('/userData').then(function (data) {
        console.log(data);
        var one = data.amounts;
        var two = data.coinPrices;

        console.log(data.amounts[0])
        console.log(data.coinPrices[0].USD);

        console.log(one[0] * two[0].USD);
        var total=0;
        for(i=0;i<data.coinNames.length;i++){
            total += one[i] * two[i].USD
        }

        console.log(total);
        $("#usdVal").text(total.toFixed(2));

        var labels;
        var data;

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'horizontalBar',
            // The data for our dataset
            data: {
                labels: data.coinNames,
                datasets: [{
                    label: "Total (USD)",
                    labelTextColor: "white",
                    backgroundColor: 'white',
                    borderColor: 'white',
                    fontColor: 'white',
                    data: data.amounts,
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'white'
                    }

                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: "white"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: "white"
                        }
                    }]
                },

            }
        });

    })

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "51ddc7961de648eb9330f8616cf43da0",
        'q': "cryptocurrency"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {

        $('.news-loading').remove();

        for (i = 0; i < 5; i++) {
            console.log(result.response.docs[i].web_url);
            console.log(result.response.docs[i].headline.main);

            var article = $("<a>");
            article.addClass("list-group-item list-group-item-action news-group-item-small");
            article.attr("href", result.response.docs[i].web_url);
            article.attr("target", "blank");
            article.text(result.response.docs[i].headline.main);
            $("#news-group").append(article);

        }

    }).fail(function (err) {
        throw err;
    });

});


var wins = 0;
var losses = 0;
var kryptoniteTotal = 0;


$(document).ready(function() {
	gameStart();
	// Blue Kryptonite Button
	$("#blueButton").on("click", function(){
		kryptoniteTotal = kryptoniteTotal + blueButton;
		console.log("kryptoniteTotal" + kryptoniteTotal)
		$("#resultKryptoniteTotal").text(kryptoniteTotal);
		document.getElementById('click').play();
		if (kryptoniteTotal === resultRandomNumber){
			wins++;
			$("#scoreWins").html("Wins: " + wins)
			document.getElementById('winner').play();
			alert("You did it!");
			gameStart();
		}
		if(kryptoniteTotal > resultRandomNumber){
			losses++;
			$("#scoreLosses").html("Losses: " + losses);
			document.getElementById('buzzer').play();
			alert("Please, try again...loser")
			gameStart();
		}

	});
	// Green Kryptonite Button
	$("#grnButton").on("click", function(){
		kryptoniteTotal = kryptoniteTotal + grnButton;
		console.log("kryptoniteTotal" + kryptoniteTotal)
		$("#resultKryptoniteTotal").text(kryptoniteTotal);
		document.getElementById('click').play();
		if (kryptoniteTotal === resultRandomNumber){
			wins++;
			$("#scoreWins").html("Wins: " + wins)
			document.getElementById('winner').play();
			alert("You did it!");
			gameStart();
		}
		if(kryptoniteTotal > resultRandomNumber){
			losses++;
			$("#scoreLosses").html("Losses: " + losses);
			document.getElementById('buzzer').play();
			alert("Please, try again...loser")
			gameStart();
		}
	});
	// Red Kryptonite Button
	$("#redButton").on("click", function(){
		kryptoniteTotal = kryptoniteTotal + redButton;
		console.log("kryptoniteTotal" + kryptoniteTotal)
		$("#resultKryptoniteTotal").text(kryptoniteTotal);
		document.getElementById('click').play();
		if (kryptoniteTotal === resultRandomNumber){
			wins++;
			$("#scoreWins").html("Wins: " + wins)
			document.getElementById('winner').play();
			alert("You did it!");
			gameStart();
		}
		if(kryptoniteTotal > resultRandomNumber){
			losses++;
			$("#scoreLosses").html("Losses: " + losses);
			document.getElementById('buzzer').play();
			alert("Please, try again...loser")
			gameStart();
		}
	});
	// Yellow Kryptonite Button
	$("#yllwButton").on("click", function(){
		kryptoniteTotal = kryptoniteTotal + yllwButton;
		console.log("kryptoniteTotal" + kryptoniteTotal)
		$("#resultKryptoniteTotal").text(kryptoniteTotal);
		document.getElementById('click').play();
		if (kryptoniteTotal === resultRandomNumber){
			wins++;
			$("#scoreWins").html("Wins: " + wins)
			document.getElementById('winner').play();
			alert("You did it!");
			gameStart();
		}
		if(kryptoniteTotal > resultRandomNumber){
			losses++;
			$("#scoreLosses").html("Losses: " + losses);
			document.getElementById('buzzer').play();
			alert("Please, try again...loser")
			gameStart();
		}
	});

});

function gameStart(){
	randomInt();
	kryptoniteTotal = 0;
	randomBlue();
	randomGreen();
	randomRed();
	randomYellow();
	$("#resultKryptoniteTotal").html(kryptoniteTotal);
	console.log("gameStart is running")
}

function randomInt(){
	resultRandomNumber = Math.floor(Math.random() * (120-19+1)+19);
	$("#resultRandomNumber").html(resultRandomNumber);
	console.log(resultRandomNumber);
}

function randomBlue(){
	blueButton = Math.floor(Math.random() * 12 + 1)
	console.log(blueButton);
}

function randomGreen(){
	grnButton = Math.floor(Math.random() * 12 + 1)
	console.log(grnButton);
}
function randomRed(){
	redButton = Math.floor(Math.random() * 12 + 1)
	console.log(redButton);
}
function randomYellow(){
	yllwButton = Math.floor(Math.random() * 12 + 1)
	console.log(yllwButton);
}



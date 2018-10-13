
$(document).ready(function() {
      
// Initialize variables
// winCounts
// lossCounts
// currentUsersCrystal
// crystals 1 - 4
// targetCrystal
	// ******* GLOBAL VARIABLES *******

	// random variables selected by computer
	var targetCrystal; // number to match
	var crystalNumbers = []; // for array of random crystal values

	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;

  var totalScore = 0; // user's score

	var winCounts = 0;
	var lossCounts = 0;
// Create a function that sets crystals 1 - 4 with a random number between 1 - 12
  // this function should also set the targetCrystal to a random Number between 19 - 120
  var rand = [];

  for (var r = 19; r < 121; r++) {
      rand.push(r);
  }

  // crystal numbers array
  var crystals = [];

  for (var c = 1; c < 13; c++) {

      crystals.push(c);
  }
  	// pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		targetCrystal = x;
		$("#randomNumber").html(targetCrystal);

		console.log("random number: " + targetCrystal);

    } // END of pickRandomNumber function
    // pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNumbers);

	} // END of pickRandomCrystals function
    function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		crystal1 = arr[0];
		crystal2 = arr[1];
		crystal3 = arr[2];
		crystal4 = arr[3];
	} // END of crystalValues function

	function gameReset(x) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#your-score").html(totalScore);

		alert(x);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(rand); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);

		// crystal button functions

		$("#button-1").on("click", function() {

			totalScore += crystal1;
			$("#your-score").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += crystal2;
			$("#your-score").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += crystal3;
			$("#your-score").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += crystal4;
			$("#your-score").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user winCounts
		if (totalScore == targetCrystal) {

			winCounts++;
			console.log(totalScore);
			$("#your-score").html(totalScore);
			$("#winCounts").html("winCounts: " + winCounts);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > targetCrystal){

			lossCounts++;
			$("#your-score").html(totalScore);
			$("#lossCounts").html("lossCounts: " + lossCounts);

			setTimeout(function() {gameReset("WOMP-WOMP...YOU LOSE!")}, 200);
		}
	});

}); // end of script





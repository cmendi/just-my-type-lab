$(document).ready(function () {
	// Variables
	let keyUp = $("#keyboard-upper-container");
	let keyLow = $("#keyboard-lower-container");
	let sentences = [
		"ten ate neite ate nee enet ite ate inet ent eate",
		"Too ato too nOt enot one totA not anot tOO aNot",
		"oat itain oat tain nate eate tea anne inant nean",
		"itant eate anot eat nato inate eat anot tain eat",
		"nee ene ate ite tent tiet ent ine ene ete ene ate",
	];
	let letterIndex = 0;
	let sentenceIndex = 0;
	let numberOfWords = 54;
	let numOfMistakes = 0;
	let keyPressed = 0;
	let startTimer = 0;
	let endTimer = 0;

	let replayButton = $(
		"<input class='btn btn-primary' value='Play Again' onClick='window.location.reload()'>"
	);
	// console.log(sentences[0]);
	// Create a variable with the first sentence of the sentences array and display it on the page and current letter in the sentence
	let currentSentence = sentences[sentenceIndex];
	// console.log(currentSentence.length);
	$("#sentence").text(currentSentence);

	// Display the current letter on the page
	let currentLetter = currentSentence[letterIndex];
	let targetLetterDiv = $("#target-letter");
	targetLetterDiv.text(currentLetter);

	// Hide the uppercase keyboard when page loads
	$(keyUp).toggle();

	// Create event listener for key down
	$(document).keydown(function (e) {
		// console.log(e);
		// When pressing shift toggle keyboards to show and hide
		if (e.which === 16) {
			$(keyLow).hide();
			$(keyUp).show();
		}
	});

	// Creat event listener for key up
	$(document).keyup(function (e) {
		// when pressing shift toggle keyboards to show and hide
		if (e.which === 16) {
			$(keyLow).show();
			$(keyUp).hide();
		}
		$(".background-yellow").removeClass("background-yellow");
	});

	// Create event listener for keypress
	$(document).keypress(function (e) {
		// start the timer when a key is pressed
		if (keyPressed < 1) {
			startTimer = e.timeStamp;
			keyPressed++;
			// console.log(startTimer)
		}
		// console.log(e.which);
		// console.log(e);
		// Highlight letters when they are pressed
		$("#" + e.which).addClass("background-yellow");
		//Update the currentSentence variable with the new sentences index
		let currentSentence = sentences[sentenceIndex];
		// Update the currentLetter variable when a key is pressed to the next letterIndex
		let currentLetter = currentSentence[letterIndex];
		// increase the letter index by 1 every time the key is pressed
		letterIndex++;
		// Update targetLetter variable when key is pressed with the current letter index
		let targetLetter = currentSentence[letterIndex];
		// Display the target letter
		targetLetterDiv.text(targetLetter);
		// Move yellow block across the screen when a key is pressed.
		$("#yellow-block").animate({ left: "+=17.5px" }, { duration: 1 });

		// Check to see if the sentence index is less than the length of the sentence
		if (sentenceIndex < sentences.length) {
			// console.log("running one");
			if (letterIndex < currentSentence.length) {
				console.log("running two");
				// Check and see if the letter that has been pressed matches the letter index in the sentence
				if (e.which === currentLetter.charCodeAt()) {
					// console.log("Correct");
					// Target the foodback div and enter a checkmark
					$("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
				} else {
					// console.log("Wrong");
					$("#feedback").append(
						'<span class="glyphicon glyphicon-remove"></span>'
					);
					numOfMistakes++;
				}
				// Once sentence is complete go to the next sentence and reset yellow block to the start
			} else if (sentenceIndex < sentences.length - 1) {
				console.log(sentenceIndex);
				$("#feedback").empty();
				sentenceIndex++;
				$("#sentence").text(sentences[sentenceIndex]);
				targetLetterDiv.text(sentences[sentenceIndex].charAt(0));
				letterIndex = 0;
				$("#yellow-block").animate({ left: "15px" });
				// Game over
			} else if (sentenceIndex < sentences.length) {
				// Display words per minute
				endTimer = e.timeStamp;
				let timeDiff = endTimer - startTimer;
				let minutes = Math.floor(timeDiff / 1000) / 60;
				let wordsPerMin = Math.floor(
					numberOfWords / minutes - 2 * numOfMistakes
				);
				// Remove everything but the score
				$("#sentence").empty();
				$("#yellow-block").hide();
				$("#feedback").empty();
				$("#target-letter").empty();
				$("#sentence").append("You had " + wordsPerMin + " words per minute!");

				// button to restart the game
				$(targetLetterDiv).append(replayButton);
				// console.log(wordsPerMin);
				// console.log(minutes);
				// console.log(timeDiff);
				// console.log(endTimer);
				// console.log("Game Over");
			}
		}
	});
});

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
	// console.log(sentences[0]);
	// Create a variable with the first sentence of the sentences array and display it on the page and current letter in the sentence
	let currentSentence = sentences[sentenceIndex];
	// console.log(currentSentence.length);
	let currentLetter = currentSentence[letterIndex];
	let targetLetterDiv = $("#target-letter");
	$("#sentence").text(sentences[sentenceIndex]);
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
		// console.log(e.which);
		// console.log(e);
		// Highlight letters when they are pressed
		$("#" + e.which).addClass("background-yellow");
		// Create a variable to target the first sentence
		let currentSentence = sentences[sentenceIndex];
		// Create a variable that targets the index value of the letter in the sentence
		let currentLetter = currentSentence[letterIndex];
		// Create a counter to go to the next letter index when key is pressed
		letterIndex++;
		let targetLetter = currentSentence[letterIndex];
		targetLetterDiv.text(targetLetter);
		// Move yellow block across the screen when a key is pressed.
		$("#yellow-block").animate({ left: "+=17.5px" }, { duration: 1 });

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
				console.log("Game Over");
			}
		}
	});
});

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
	// console.log(sentences);
	// console.log(sentences[0]);
	// Create a variable with the first sentence of the sentences array and display it on the page
	let currentSentence = sentences[0];
	$("#sentence").append(currentSentence);

	// Hide the uppercase keyboard when page loads
	$(keyUp).toggle();

	// Create event listener for key down
	$(document).keydown(function (e) {
		// console.log(e);
		// When pressing shift toggle keyboards to show and hide
		if (e.which === 16) {
			$(keyUp).toggle();
			$(keyLow).toggle();
		}
	});

	// Creat event listener for key up
	$(document).keyup(function (e) {
		// when pressing shift toggle keyboards to show and hide
		if (e.which === 16) {
			$(keyLow).toggle();
			$(keyUp).toggle();
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
		console.log(letterIndex);
		// Check and see if the letter that has been pressed matches the letter index in the sentence
		if (e.which === currentLetter.charCodeAt()) {
			console.log("Correct");
		} else {
			console.log("Wrong");
		}
	});
});

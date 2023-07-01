$(document).ready(function () {
	// Variables
	let keyUpper = $("#keyboard-upper-container");
	let keyLower = $("#keyboard-lower-container");

	// Hide uppcase keyboard when page loads
	$(keyUpper).hide();

	// Create event listener that listens for a keydown.
	$(document).keydown(function (e) {
		// console.log(e1);

		if (e.which === 16) {
			$(keyLower).hide();
			$(keyUpper).show();
		}
	});

	$(document).keyup(function (e) {
		if (e.which === 16) {
			$(keyLower).show();
			$(keyUpper).hide();
		}
		$(".background-yellow").removeClass("background-yellow");
	});

	$(document).keypress(function (e) {
		$("#" + e.which).addClass("background-yellow");

		// console.log(e.which);
	});
});

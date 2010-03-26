$(document).ready(function() {
	prepareAnimation();
	startAnimation();
});

function prepareAnimation() {
	$('.bubble_one, #left_arrow, #right_arrow, .bubble_two').fadeOut(0);
}

function startAnimation() {
	$('.bubble_one').fadeIn(330);
	setTimeout( function() { $('#left_arrow').fadeIn(330) }, 330 + 100);
	setTimeout( function() { $('#right_arrow').fadeIn(330) }, 660 + 200);
	setTimeout( function() { $('.bubble_two').fadeIn(330) }, 990 + 300);
	setTimeout (function() { $('#store').fadeTo(330, .5) }, 1320 + 400);
	setTimeout (function() { $('#store').fadeTo(330, 1) }, 1650 + 1000);
}
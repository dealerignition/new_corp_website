var ANIMATION_TIME = 500;
var PAUSE = 4000;

$(document).ready(function() {
	prepareAnimation();
	
	prepare_for_frame_one();
	animate_frame_one();
	
	setTimeout(function() {
		prepare_for_frame_two();
		animate_frame_two();
	}, ANIMATION_TIME * 2 + PAUSE);
	
	setTimeout(function() {
		prepare_for_frame_three();
		animate_frame_three();
	}, ANIMATION_TIME * 6 + PAUSE * 2);
	
	setTimeout(function() {
		prepare_for_frame_four();
		animate_frame_four();
	}, ANIMATION_TIME * 10 + PAUSE * 3);
});

function prepareAnimation() {
	$('#right_arrow, #people, #manufacturer, #store, #right_arrow_left, #left_arrow_left').fadeOut(0);
	$('.bubble_one, #left_arrow, .bubble_two, .bubble_three, .bubble_four').hide();
}

function prepare_for_frame_one() {
	$('#left_arrow').removeClass('inactive').addClass('active');
}

function animate_frame_one() {
	setTimeout(function() {
		$('#manufacturer, #store').fadeIn(ANIMATION_TIME);
	}, ANIMATION_TIME);

	setTimeout(function() {
		$('#left_arrow').fadeIn(ANIMATION_TIME);
	}, ANIMATION_TIME * 2);
		
	setTimeout(function() {
		$('.bubble_one').show("drop", {direction: 'left'}, ANIMATION_TIME);
	}, ANIMATION_TIME * 3);
}

function prepare_for_frame_two() {
	$('.bubble_one').fadeTo(ANIMATION_TIME, 0);
	$('#left_arrow').fadeTo(ANIMATION_TIME, 0);
	$('#manufacturer').fadeTo(ANIMATION_TIME, 0.02);
	setTimeout(function() { $('#people').fadeTo(ANIMATION_TIME, 1); });
}

function animate_frame_two() {
	setTimeout(function() {
		$('#right_arrow').fadeIn(ANIMATION_TIME);
	}, ANIMATION_TIME * 2);
	
	setTimeout(function() {
		$('.bubble_two').show("drop", {direction: 'right'}, ANIMATION_TIME);
	}, ANIMATION_TIME * 4);
}

function prepare_for_frame_three() {
	$('#right_arrow').fadeTo(ANIMATION_TIME, 0);
	$('.bubble_two').fadeTo(ANIMATION_TIME, 0);
}

function animate_frame_three() {
	setTimeout(function() {
		$('#right_arrow_left').fadeIn(ANIMATION_TIME);
	}, ANIMATION_TIME * 2);
	
	setTimeout(function() {
		$('.bubble_three').show("drop", {direction: 'right'}, ANIMATION_TIME);
	}, ANIMATION_TIME * 4);
}

function prepare_for_frame_four() {
	$('#right_arrow_left').fadeTo(ANIMATION_TIME, 0);
	$('.bubble_three').fadeTo(ANIMATION_TIME, 0);
	$('#people').fadeTo(ANIMATION_TIME, 0.02);
}

function animate_frame_four() {
	 setTimeout(function() {
	 	$('#manufacturer').fadeTo(ANIMATION_TIME, 1);
	 }, ANIMATION_TIME * 2);
	
	 setTimeout(function() {
	 	$('#left_arrow_left').fadeIn(ANIMATION_TIME);
	 }, ANIMATION_TIME * 4);
	 
	setTimeout(function() {
		$('.bubble_four').show("drop", {direction: 'left'}, ANIMATION_TIME);
	}, ANIMATION_TIME * 6);
}
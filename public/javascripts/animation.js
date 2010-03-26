var ANIMATION_TIME = 500;
var PAUSE = 2500;

$(document).ready(function() {
	prepareAnimation();
	
	prepare_for_frame_one();
	animate_frame_one();
	
	setTimeout(function() {
		prepare_for_frame_two();
		animate_frame_two();
	}, ANIMATION_TIME * 2 + PAUSE);
	

});

function prepareAnimation() {
	$('#right_arrow, #people, #manufacturer, #store').fadeOut(0);
	$('.bubble_one, #left_arrow').hide();
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
	$('#left_arrow, .bubble_one').fadeTo(ANIMATION_TIME, 0);
	$('#manufacturer').fadeTo(ANIMATION_TIME, 0.2);
	setTimeout(function() { $('#people').fadeTo(ANIMATION_TIME, 1); });
}

function animate_frame_two() {
	setTimeout(function() {
		$('#right_arrow').fadeIn(ANIMATION_TIME);
	}, ANIMATION_TIME * 2);
}
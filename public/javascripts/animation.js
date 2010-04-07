jQuery.noConflict();


var ANIMATION_TIME = 500;
var PAUSE = 4000;

jQuery(document).ready(function() {
	prepareAnimation();
	
	prepare_for_frame_one();
	animate_frame_one();
	
	setTimeout(function() {
		prepare_for_frame_two();
		animate_frame_two();
	}, ANIMATION_TIME * 3 + PAUSE);
	
	setTimeout(function() {
		prepare_for_frame_three();
		animate_frame_three();
	}, ANIMATION_TIME * 6 + PAUSE * 2);
	
	setTimeout(function() {
		prepare_for_frame_four();
		animate_frame_four();
	}, ANIMATION_TIME * 9 + PAUSE * 3);
	
	setTimeout(function() {
		prepare_for_frame_five();
		animate_frame_five();
	}, ANIMATION_TIME * 12 + PAUSE * 4);
	
	setTimeout(function() {
		jQuery('.header_animation div').fadeOut(ANIMATION_TIME * 2);
		setTimeout(function() { jQuery('.last_frame').fadeIn(ANIMATION_TIME*2);}, ANIMATION_TIME * 2);
	}, ANIMATION_TIME * 20 + PAUSE * 5);
});

function prepareAnimation() {
	jQuery('#right_arrow, #people, #manufacturer, #store, #right_arrow_left, #left_arrow_left, .last_frame').fadeOut(0);
	jQuery('.bubble_one, #left_arrow, .bubble_two, .bubble_three, .bubble_four, .bubble_five').hide();
}

function prepare_for_frame_one() {
	jQuery('#left_arrow').removeClass('inactive').addClass('active');
}

function animate_frame_one() {
	setTimeout(function() {
		jQuery('#manufacturer, #store').fadeIn(ANIMATION_TIME);
	}, ANIMATION_TIME);

	setTimeout(function() {
		jQuery('#left_arrow').fadeIn(ANIMATION_TIME);
		jQuery('.bubble_one').show("drop", {direction: 'left'}, ANIMATION_TIME);
	}, ANIMATION_TIME * 3);
}

function prepare_for_frame_two() {
	jQuery('.bubble_one').fadeTo(ANIMATION_TIME, 0);
	jQuery('#left_arrow').fadeTo(ANIMATION_TIME, 0);
	jQuery('#manufacturer').fadeTo(ANIMATION_TIME, 0.02);
	setTimeout(function() { jQuery('#people').fadeTo(ANIMATION_TIME, 1); });
}

function animate_frame_two() {
	setTimeout(function() {
		jQuery('#right_arrow').fadeIn(ANIMATION_TIME);
		jQuery('.bubble_two').show("drop", {direction: 'right'}, ANIMATION_TIME);
	}, ANIMATION_TIME * 2);
}

function prepare_for_frame_three() {
	jQuery('#right_arrow').fadeTo(ANIMATION_TIME, 0);
	jQuery('.bubble_two').fadeTo(ANIMATION_TIME, 0);
}

function animate_frame_three() {
	setTimeout(function() {
		jQuery('#right_arrow_left').fadeIn(ANIMATION_TIME);
		jQuery('.bubble_three').show("drop", {direction: 'right'}, ANIMATION_TIME);
	}, ANIMATION_TIME * 2);
}

function prepare_for_frame_four() {
	jQuery('#right_arrow_left').fadeTo(ANIMATION_TIME, 0);
	jQuery('.bubble_three').fadeTo(ANIMATION_TIME, 0);
	jQuery('#people').fadeTo(ANIMATION_TIME, 0.02);
}

function animate_frame_four() {
	 setTimeout(function() {
	 	jQuery('#manufacturer').fadeTo(ANIMATION_TIME, 1);
	 }, ANIMATION_TIME * 2);
	 
	setTimeout(function() {
		jQuery('#left_arrow_left').fadeIn(ANIMATION_TIME);
		jQuery('.bubble_four').show("drop", {direction: 'left'}, ANIMATION_TIME);
	}, ANIMATION_TIME * 4);
}

function prepare_for_frame_five() {
	jQuery('#left_arrow_left').fadeTo(ANIMATION_TIME, 0);
	jQuery('.bubble_four').fadeTo(ANIMATION_TIME, 0);
}

function animate_frame_five() {
	 setTimeout(function() {
		jQuery('#left_arrow').fadeTo(ANIMATION_TIME, 1);
		jQuery('.bubble_five').show("drop", {direction: 'left'}, ANIMATION_TIME);
	 }, ANIMATION_TIME * 2);
}
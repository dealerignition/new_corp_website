jQuery(document).ready(function() {
	activateCurrentLink();
	searchTermReplacement(jQuery('input#q'), "Search the site");
	
	current_id = window.location.hash;
	if(current_id)
	{
		selectLink(jQuery('#link_' + current_id.substring(1)));
	}
	else
	{
		selectLink(jQuery('.interior_content .sidebar li:first-child'));
	}
	
	jQuery('.interior_content .sidebar li').click(function(){
		selectLink(this);
	});
	
	
	jQuery("#request_demo").fancybox({
		'width'				: '75%',
		'height'			: '75%',
		'autoScale'			: false,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	jQuery(".register_webinar").fancybox({
		'width'				: '75%',
		'height'			: '75%',
		'autoScale'			: false,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	jQuery("div.interview a.interview_link").fancybox({
		  'width'           : 553,
		  'height'          : 345,
		  'padding'         : 10,
	    'autoScale'     	: true,
	    'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe'
		});
		
		jQuery("div.quicktours a.interview_link").fancybox({
			  'width'           : 556,
			  'height'          : 399,
			  'padding'         : 10,
		    'autoScale'     	: true,
		    'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'type'				: 'iframe'
			});
	
	
	rotateDealerList();
	
	//jQuery('#myCounter').jCounter({count: 2220222});
});

function rotateDealerList() {
	
	jQuery.get('/dealers.json', null, function(data) {
		updateFeaturedDealer(data.dealers);
		setInterval ( function() {			
			updateFeaturedDealer(data.dealers);
		}, 9000 );
	});
}	
	
function updateFeaturedDealer(dealers) {
	dealer = dealers[Math.floor(Math.random() * (dealers.length - 1))];
	jQuery('#dealer_rotation h3.name, #dealer_rotation h4.location').fadeOut(500);
	jQuery('#dealer_rotation h3.name, #dealer_rotation h4.location').fadeIn(500);
	setTimeout(function() {
		jQuery('#dealer_rotation h3.name').html(dealer.name);
		jQuery('#dealer_rotation h4.location').html(dealer.city + ", " + dealer.state);
	}, 500);
	
}

function selectLink(current_li) {
	var current_item = jQuery(current_li);
	if(current_item.attr('id')) {
		var current_link = current_item.attr('id').substring(5);
		window.location.hash = current_link;
		jQuery('.content-pane').hide();
		jQuery('.interior_content .sidebar li').removeClass('current');
		jQuery(current_li).addClass('current');
		jQuery('.interior_content .main_content .' + current_link).show();
	}
}

function activateCurrentLink() {
	var patt1=/[a-zA-Z]+\//i;
	 var path = location.pathname.match(patt1);
   if ( path ) {
     active_link = jQuery('.navigation a[href$="' + path + '"]').parents('li').attr('class', 'active').css('position', 'relative');
		 var left = (active_link.width() / 2) - 7;
		 active_link.append("<span class='triangle' style='position:absolute; bottom: -7px; left:"+ left + "px;'></span>");
	}
}

function searchTermReplacement(input_field, default_text) {	
	input_field.attr('value', default_text);
	
	input_field.focus(function() {
		if(input_field.attr('value') == default_text)
			input_field.attr('value', '');
	});
	
	input_field.blur(function() {
		 if(input_field.attr('value') == "")
			input_field.attr('value', default_text);
	});
}




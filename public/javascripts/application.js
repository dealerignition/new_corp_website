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
		jQuery('.content-pane').hide();
		jQuery('.interior_content .main_content .content-pane:first-child').show();
		jQuery('.interior_content .sidebar li:first-child').addClass('current');
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
	
});

function selectLink(current_li) {
	var current_link = jQuery(current_li).attr('id').substring(5);
	window.location.hash = current_link;
	jQuery('.content-pane').hide();
	jQuery('.interior_content .sidebar li').removeClass('current');
	jQuery(current_li).addClass('current');
	jQuery('.interior_content .main_content .' + current_link).show();
}

function activateCurrentLink() {
	 var path = location.pathname.substring(1);
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




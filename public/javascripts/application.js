$(document).ready(function() {
	activateCurrentLink();
	searchTermReplacement($('input#q'), "Search the site");
	
	$('.content-pane').hide();
	$('.interior_content .main_content .content-pane:first-child').show();
	
	$('.interior_content .sidebar li').click(function(event) {
		
		$('.content-pane').hide();
		$('.interior_content .main_content .' + $(this).attr('id')).show();
	});
});




function activateCurrentLink() {
	 var path = location.pathname.substring(1);

   if ( path ) {
     active_link = $('.navigation a[href$="' + path + '"]').parents('li').attr('class', 'active').css('position', 'relative');
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


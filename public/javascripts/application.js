$(document).ready(function() {
   var path = location.pathname.substring(1);
   if ( path ) {
     active_link = $('.navigation a[href$="' + path + '"]').parents('li').attr('class', 'active').css('position', 'relative');
		 var left = (active_link.width() / 2) - 7;
		 active_link.append("<span class='triangle' style='position:absolute; bottom: -7px; left:"+ left + "px;'></span>");
	}
	

});

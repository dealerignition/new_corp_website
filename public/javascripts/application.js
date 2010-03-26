$(document).ready(function() {
	var active_link = $('.navigation li.active a');
	active_link.css('position', 'relative');
	var left = (active_link.width() / 2) + 4;
	active_link.append("<span class='triangle' style='position:absolute; bottom: -7px; left:"+ left + "px;'></span>");
});

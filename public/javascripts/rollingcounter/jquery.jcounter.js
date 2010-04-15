/**
 * jCounter v1.3.0
 * Licensed under a Creative Commons Attribution-Noncommercial-Share Alike 3.0 United States License.
 * @author Dan Serpiello
 * dserpiello@gmail.com
 */
(function(jQuery){
	jQuery.fn.jCounter = function( options ){
		var defaults = {
			count: 0,
			counterImg: 'numbers.png',
			counterBg: 'bg-counter.jpg',
			height: 202,
			width: 11,
			duration: 2000
		};
		var options = jQuery.extend(defaults, options);

		var nums = new Image();
		nums.src = options.counterImg;
		var numHeight = options.height / 10;
		
		var title = jQuery(this).attr('title');
		
		var count = String(options.count);//.toString();
		
		if( count.charAt(0) == '+' && count.charAt(1).match(/\d/) ){
			var count = Number(title) + Number(count.substr(1));
		} else if( count.charAt(0) == '-' && count.charAt(1).match(/\d/) ){
			var count = Number(title) - Number(count.substr(1));
			if (title == '0' || count < 0) return false;
		} else if( count.match(/\D/) ){
			return false;
		}
		
		count = count.toString();
		var countlen = count.length;
		
		if( countlen != title.length ){
			jQuery(this).empty();
		}
		
		if( jQuery(this).children().size() == 0 ){
			jQuery(this).css({'width' : ((options.width * countlen) + (countlen - 1)) + 'px', 'height' : numHeight, 'background-image' : 'url(../javascripts/rollingcounter/' + options.counterBg + ')'});
		
			for( var i = 0; i < countlen; i++ ){
				jQuery(this).append('<div class="jCounter' + i + '"></div>\n');
				jQuery('.jCounter' + i, jQuery(this)).css({'background-image' : 'url(../javascripts/rollingcounter/' + options.counterImg + ')', 'float' : 'right', 'width' : options.width + 'px', 'height' : numHeight + 'px'});
				if (i > 0) jQuery('.jCounter' + i, jQuery(this)).css('border-right', '1px solid gray');
			}
		}		

		for( var i = 0; i < countlen; i++ ){
			jQuery('.jCounter' + i, jQuery(this)).animate(
				{backgroundPosition: '(0 ' + (count.substr(countlen - (i+1), 1) * (-numHeight)) + 'px)'},
				{duration: options.duration}
			);
		}
		
		jQuery(this).attr('title', count);
	};
})(jQuery);
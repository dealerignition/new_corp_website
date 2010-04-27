jQuery.noConflict();


jQuery(document).ready(function() {
  jQuery('#ani-slides').cycle({ 
      timeout:  6500, 
      speed:  500,
      before: function() {
        var li_class = jQuery(this).attr('class');
        jQuery('.animation-menu li.'+ li_class).animate({backgroundPosition: '0px -140px'}, 500);
      },
      after: function() {
        var li_class = jQuery(this).attr('class');
        setTimeout(function() {
          jQuery('.animation-menu li.'+ li_class).animate({backgroundPosition: '0px 0px'}, 500);
        },
        6250);
      }
  });
      
  jQuery('.animation-menu li a').click(function() {
    //stop the animation
    jQuery('#ani-slides').cycle('stop');
    
    var li_class = jQuery(this).attr('id');
    
    //go to that slide
    jQuery('#ani-slides div').hide().css('opacity', '1');
    jQuery('#ani-slides div.'+ li_class).show();
    
    //fade in that link
     jQuery('.animation-menu li').animate({backgroundPosition: '0px 0px'}, 0);
     jQuery('.animation-menu li.'+ li_class).animate({backgroundPosition: '0px -140px'}, 0);
  });
});
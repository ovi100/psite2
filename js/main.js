/*------------------------------------
 *Author:MD ABU SAYED
 *Template:Personal Resume 2
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function(){

	$(window).scroll(function(){

		if ($( window ).width()>480){
			if ($(this).scrollTop()>150){
		      $('.menu').css('background','#000000cc');
		      // $('.menu').addClass('fixed-menu');
		      
		    } 
		    else {
	    		$('.menu').css('background','transparent');
		      // $('.menu').removeClass('fixed-menu');
		    }
		}
  	});

  	$('.navbar a').offsetScroller({offsetPixels: 95});

  	$( ".mtbtn" ).click(function() {
	  $( ".mitems" ).toggleClass( "d-block" );
	});


    $('#pslider').carousel({
	    interval:false,
	    wrap: false
  	});


});


  

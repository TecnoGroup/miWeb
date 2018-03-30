<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/flip.js"></script>
<script type="text/javascript" src="js/jquery.flip.js"></script>
<script type="text/javascript" src="js/jquery.flip.min.js"></script>
<script>
//funciones para cambiar el color del menu al pasar el mouse sobre un item de la lista//
$(document).ready(function(){
	$(".lista1").hover(function(){
		$(".lista1").css("color", "#FFF");
		}, function(){
			$(".lista1").css("color", "#CCC");
		});
});
$(document).ready(function(){
	$(".lista2").hover(function(){
		$(".lista2").css("color", "#FFF");
		}, function(){
			$(".lista2").css("color", "#CCC");
		});
});
$(document).ready(function(){
	$(".lista3").hover(function(){
		$(".lista3").css("color", "#FFF");
		}, function(){
			$(".lista3").css("color", "#CCC");
		});
});

$(document).ready(function(){
$(".card").flip({
  axis: 'y',
  trigger: 'hover'
});
});


// NIVO LIGHTBOX
$('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });

// ISOTOPE FILTER
jQuery(document).ready(function($){

	if ( $('.iso-box-wrapper').length > 0 ) { 

	    var $container 	= $('.iso-box-wrapper'), 
	    	$imgs 		= $('.iso-box img');



	    $container.imagesLoaded(function () {

	    	$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
	    	});

	    	$imgs.load(function(){
	    		$container.isotope('reLayout');
	    	})

	    });

	    //filter items on button click

	    $('.filter-wrapper li a').click(function(){

	        var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({ 
				filter: filterValue,
				animationOptions: { 
				    duration: 750, 
				    easing: 'linear', 
				    queue: false, 
				}              	 
			});	            

			// don't proceed if already selected 

			if ( $this.hasClass('selected') ) { 
				return false; 
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

	      return false;
	    }); 

	}

});


// HIDE MOBILE MENU AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


// SCROLLTO THE TOP
$(document).ready(function() {
	// Show or hide the sticky footer button
		$(window).scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('.go-top').fadeIn(200);
					} else {
						$('.go-top').fadeOut(200);
					}
				});		
				// Animate the scroll to top
				$('.go-top').click(function(event) {
					event.preventDefault();
				
					$('html, body').animate({scrollTop: 0}, 300);
				})
			});
			
</script>
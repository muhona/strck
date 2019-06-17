
    jQuery(document).ready(function($){


        //$(".embed-responsive iframe").addClass("embed-responsive-item");
        //$(".carousel-inner .item:first-child").addClass("active");
        
       // $('[data-toggle="tooltip"]').tooltip();
        $(".top-area").sticky({topSpacing:0});
        $('.nav li a[href^="#"]').on('click', function (e) {
					e.preventDefault();

					var target = this.hash;
					var $target = $(target);
                    var headerH = "10";

					$('html, body').animate({
						'scrollTop': $target.offset().top -headerH + "px"
					}, 1000, 'swing');
				});

				$('body').scrollspy({ target: '.navbar',offset:200 });
        new WOW().init();
        
        $(".nav li a").click(function(){
            $(".navbar-collapse").removeClass("in");
        });
})


    
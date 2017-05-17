$(document).ready(function() {


	// sliders

	$('.sl1').slick({
		infinite: true,
		dots: false,
		autoplay: false,
		speed: 500,
		arrows: true,
		vertical: true,
		slidesToShow: 4,
		nextArrow: '<span class="ti-arrow-up"></span>',
		prevArrow: '<span class="ti-arrow-down"></span>',
		focusOnSelect: true,
		initialSlide: 4,
		asNavFor: '.sl2'
		
	});

	$('.sl3').slick({
		infinite: true,
		dots: false,
		autoplay: false,
		speed: 500,
		arrows: true,
		slidesToShow: 4,
		nextArrow: '<span class="ti-arrow-left"></span>',
		prevArrow: '<span class="ti-arrow-right"></span>',
		focusOnSelect: true,
		initialSlide: 4,
		asNavFor: '.sl2',
		responsive: [
		{
			breakpoint: 769,
			settings: {

				
			}
		}
		]
	});

	$('.sl2').slick({
	focusOnSelect: true,
	dots: false,
	arrows: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.sl1',

	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false,
				asNavFor: '.sl3'
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}

		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
			}

		}
	]
});

	//active slide
	$(".sl__img").click(function(){
		$(".sl__img").removeClass("active");
		$(this).addClass("active");
	});
	
	// active colour
	$(".colour").click(function(){
		$(".colour").removeClass("active");
		$(this).addClass("active");
	});

	$(".variant").click(function(){
			$(".variant").removeClass("active");
			$(this).addClass("active");
		});
	$("nav li a").click(function(){
		$("nav li a").removeClass("active");
		$(this).addClass("active");
	});

	// counter
		$('.minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});

// toggle menu for small devices (767px)
	$(".toggle_mnu").click(function() {
			$(this).toggleClass("on");
			$(".main-mnu").slideToggle();
			$(".sandwich").toggleClass("active");
		});


	$('.main-mnu li').click(function(){
    $(".main-mnu").slideToggle();
    $(".sandwich").toggleClass("active");
  });

// pop-up
	$(".popup_content").magnificPopup({type:"inline"});

// accordion

 $(function() {
      var $o, $n;
      $(".title_block").on("click", function() {
        $o = $(this).parents(".accordion_item"), $n = $o.find(".info"),
          $o.hasClass("active_block") ? ($o.removeClass("active_block"),
            $n.slideUp()) : ($o.addClass("active_block"), $n.stop(!0, !0).slideDown(),
            $o.siblings(".active_block").removeClass("active_block").children(
              ".info").stop(!0, !0).slideUp())
      });
    });


 	// up-button
	$(".up").mPageScroll2id();




	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Дякуємо за реєстрацію!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	
});
// loader
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});



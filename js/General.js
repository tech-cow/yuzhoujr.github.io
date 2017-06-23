$(document).ready(function(){
    $("img").lazyload({
     effect: "fadeIn"
     });

    $('.site-navigation').on('click', function(){
	  var $info = $(".further-menu");
	  var $plus = $("#information");

	  if ($info.hasClass('open')) {
	    $info.animate({
	      height : '345px'
	    }, 500).removeClass('open');
		$plus.removeClass('rotate-reset');
	   	$plus.addClass('rotate');
	  } else {
	    $info.animate({
	      height : '0'
	    }, 500).addClass('open');
	   	$plus.removeClass('rotate');
	   	$plus.addClass('rotate-reset');

	  }
	});
});

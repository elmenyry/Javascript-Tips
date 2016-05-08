jQuery(document).ready(function(){

	$( window ).load(function() {
		$("#loading").fadeOut('slow');
	});

	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	    }
	});

	setInterval(function(){
		$('#scroll_to_bottom img').animateCss('tada');
	}, 400);


	$('#back_to_top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
	        scrollTop: $(".intro").offset().top
	    }, 500);
	});

	$('.menu_nav ul li a').click(function(event) {
		event.preventDefault();
		$('.content_area').children().hide();
		var link = $(this).attr('href');
		$(link).show().addClass('scaleUp');
	});


});

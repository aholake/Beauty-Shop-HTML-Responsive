$(function() {
	console.log("RUN SCROLL.JS");
	var btnTop = $('.page-top');
	btnTop.hide();

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if(height > 150) {
			btnTop.fadeIn();	
		} else {
			btnTop.fadeOut();
		}

	});
	btnTop.click(function() {
		$('body, html').animate({scrollTop: 0}, 'slow');
	});
});
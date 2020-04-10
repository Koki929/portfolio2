/* loader */
window.onload = function() {
	const loader = document.getElementById('loader-background');
	loader.classList.add('loaded');
}

/* drawer */
jQuery('.drawer-icon').on('click', function () {
	jQuery('.drawer').toggleClass('m_checked');
});

jQuery(window).on('scroll', function ($) {
	if (100 < jQuery(this).scrollTop()) {
		jQuery('.floating').show();
	} else {
		jQuery('.floating').hide();
	}
});


/* scroll */
$(function(){
	$('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});
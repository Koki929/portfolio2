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

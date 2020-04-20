/* loader */
window.onload = function() {
	const loader = document.getElementById('loader-background');
	loader.classList.add('loaded');
}

/* drawer */
jQuery('.drawer-switch').on('click', function () {
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

/* movetext*/
$('.movetext').each(function(){
    //一文字ずつ<span>で括る
    $(this).children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
    });
     
　　//inviewを使って画面に表れたら起動させる
    $(this).on('inview',function(){
        //一文字ずつ順番に不透明させる
        $(this).css({'opacity':1});
        for (var i = 0; i <= $(this).children('span').length; i++) {
        $(this).children('span').eq(i).delay(40*i).animate({'opacity':1},800);
        };
    });
});

/* wow */
new WOW().init();

/* textyle */
$('.target').textyleF({
	duration : 1300, //エフェクト時間(ミリ秒)
	delay : 70, //文字間のエフェクト間隔(ミリ秒)
});

$('.target2').textyleF({
	duration : 900, //エフェクト時間(ミリ秒)
	delay : 50, //文字間のエフェクト間隔(ミリ秒)
});

$('.target3').textyleF({
	duration : 400, //エフェクト時間(ミリ秒)
	delay : 50, //文字間のエフェクト間隔(ミリ秒)
	callback : function(){
		$(this).css({
		  color : '#EEE',
		  transition : '1s',
		});
	}
});
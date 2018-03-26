$(function(){
	$('.payThree a').click(function(){
		$(this).addClass('payChoice');
		$(this).siblings('a').removeClass('payChoice');
	});
});

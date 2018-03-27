$(function(){
	var bookSwiper = new Swiper('.swiper-container-book', {
		loop:true,
		autoplay: 5000,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});
	//滚动事件
	$(window).scroll(function(){
		console.log($('.partTwo').offset().top-$(window).scrollTop());
		if($('.partTwo').offset().top-$(window).scrollTop()<=0){
			$('.nowPay').addClass('nPay');
		}else{
			$('.nowPay').removeClass('nPay');
		}
	});
	
	$('.nowPay').click(function(){
		$('#mask').show();
		$('#popWin').show();
	});
	$('#mask').click(function(){
		$('#mask').hide();
		$('#popWin').hide();
	});
	$('.divhas').click(function(){
		$('.divhas').removeClass('choiced');
		$(this).addClass('choiced');
	});
});

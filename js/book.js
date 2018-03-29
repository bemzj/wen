$(function(){
	var bookSwiper = new Swiper('.swiper-container-book', {
		loop:true,
		autoplay: 5000,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});
	//滚动事件
	$(window).scroll(function(){
		if($('.partTwo').offset().top-$(window).scrollTop()<=0){
			$('.nowPay').addClass('nPay');
		}else{
			$('.nowPay').removeClass('nPay');
		}
		if($('#book4').offset().top-$(window).scrollTop()<=(100+$('#book3').height())){
			$('#book3').addClass('book3');
		}else{
			$('#book3').removeClass('book3');
		}
		//
		var winH1 = $(window).height()/3;
		var winH2 = $(window).height()/2;
		if($('.titleBox1').offset().top-$(window).scrollTop()<winH2 && $('.titleBox1').offset().top-$(window).scrollTop()>winH1)
		{
				$('.sixBtn').children('a').eq(1).addClass('btnChoice');
			 	$('.sixBtn').children('a').eq(1).siblings('a').removeClass('btnChoice');
		}else if($('.titleBox1').offset().top-$(window).scrollTop()>winH1){
				$('.sixBtn').children('a').eq(0).addClass('btnChoice');
			 	$('.sixBtn').children('a').eq(0).siblings('a').removeClass('btnChoice');
		}else if($('.titleBox1').offset().top-$(window).scrollTop()>winH2)
		{
			
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
//	//鼠标悬浮效果

	var btcHeight = $('#book2').height();
	$('#book2 .bookTwo .bTwoContent').css('margin-top',btcHeight+'px');
	$('#book2 .bookTwo .bTwoTitle').mouseenter(function(){
		$(this).parents('.bookTwo').addClass('bookTwoBack');
		$(this).find('.bTwoContent').show().stop().animate({'margin-top':'0px','opacity':1},500);
	});
	
	$('#book2 .bookTwo .bTwoTitle').mouseout(function(){
		$(this).parents('.bookTwo').removeClass('bookTwoBack');
		$(this).find('.bTwoContent').hide();
		$(this).find('.bTwoContent').css({'margin-top':btcHeight+'px','opacity':0});
	});
	
	
	var bookSwiper2 = new Swiper('.swiper-container-book2', {
		loop:true,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});
	
	
});

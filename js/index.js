$(function(){
	var newsSwiper = new Swiper('.swiper-container-news', {
		loop:true,
		autoplay: 5000,
	});
	
	var mddSwiper = new Swiper('.swiper-container-mdd', {
		loop:true,
		slidesPerView : 3,
		spaceBetween : 40,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});
	$('.ns2 input').focusin(function(){
		$('.ns3').show();
		
	});
	$('.ns2 input').focusout(function(){
		$('.ns3').hide();
		
	});
});

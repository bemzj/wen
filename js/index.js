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
});

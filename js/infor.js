$(function(){
	var smallSwiper = new Swiper('.swiper-container-small',{
		pagination : '.swiper-pagination',
		paginationClickable :true,
		loop:true
	});
	var tourSwiper = new Swiper('.swiper-container-tour', {
		loop:true,
//		autoplay: 5000,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});
})

//头部轮播
var mySwiper1 = new Swiper('#swiper1',{
    direction:'horizontal',
    loop:true,
    pagination:'.swiper-pagination',
    autoplay:'2000',
    speed: 2000
});
//商品轮播
var mySwiper2 = new Swiper ('#swiper2', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    paginationType: 'custom',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    autoplay:'2000',
    speed:2000
});

//鼠标悬停停止自动滚动
$('.swiper-slide').mouseenter(function () {
    mySwiper1.stopAutoplay();
    mySwiper2.stopAutoplay();
})
$('.swiper-slide').mouseleave(function () {
    mySwiper1.startAutoplay();
    mySwiper2.startAutoplay();
})

$(function () {
    var t = 0
    //返回顶部
    $('.toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800,function(){
        	$('.right-list').fadeOut();
        });
        
    })
    $(window).scroll(function (e) {
    	if(   $('.con-wrap .wrap').offset().top-$(window).scrollTop()<=30)
    	{
    		$('.right-list').fadeIn();
    	}else{
    		$('.right-list').fadeOut();
    	}
        
    })
    $(window).scrollTop(function (e) {
        console.log(e)
    })
})
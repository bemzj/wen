$(function(){
	$('.swiper-button-next').on('click',function(){
		var top = $('#aboutMain').offset().top+1;
		$('html,body').animate({  
	            scrollTop: top
	        }, 500); 	
	});
});

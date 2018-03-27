$(function(){
	var smallSwiper = new Swiper('.swiper-container-news',{
		pagination : '.swiper-pagination',
		paginationClickable :true,
		loop:true
	});
	var showStatus = -1;
	$('.tcTop .floatl').mouseenter(function(){
		var index = $(this).index();
		showStatus=index;
		switch(index){
			case 0:
				$('.tcb01').show();
				$('.tcb02').hide();
				$('.tcb03').hide();
				break;
			case 1:
				$('.tcb02').show();
				$('.tcb01').hide();
				$('.tcb03').hide();
				break;
			case 2:
				$('.tcb03').show();
				$('.tcb01').hide();
				$('.tcb02').hide();
				break
		}
	});
	$('.tcTop .floatl').mouseleave(function(){
		$('.tcb01').hide();
		$('.tcb02').hide();
		$('.tcb03').hide();
		$('.tcBottom').mouseenter(function(){
			switch(showStatus){
			case 0:
				$('.tcb01').show();
				$('.tcb02').hide();
				$('.tcb03').hide();
				break;
			case 1:
				$('.tcb02').show();
				$('.tcb01').hide();
				$('.tcb03').hide();
				break;
			case 2:
				$('.tcb03').show();
				$('.tcb01').hide();
				$('.tcb02').hide();
				break
		}
			
		});
	});
	$('.tcBottom').mouseleave(function(){
		$('.tcb01').hide();
		$('.tcb02').hide();
		$('.tcb03').hide();
	});
});

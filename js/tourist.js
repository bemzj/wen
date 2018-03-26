$(function(){
	//展开和收起
	$('section .typeBox .typeBoxIn a').click(function(){
		if($(this).attr('isOpen')=='false'){
			$(this).attr('isOpen','true');
			var h = $(this).parents('.typeBoxIn').height()-34;
			$(this).parents('.typeBox').animate({'height':h},500);
			$(this).html('收起<span>&and;</span>');
		}else{
			$(this).attr('isOpen','false');
			$(this).parents('.typeBox').animate({'height':144},500);
			$(this).html('展开<span>&or;</span>');
		}
	});
});

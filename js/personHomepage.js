$(function(){
	$('.tab1').find('a').click(function(){
		var index = $(this).index();
		$(this).addClass('sel');
		$(this).siblings('a').removeClass('sel');
		if(index==0)
		{
			$('#content').show();
			$('#content1').hide();
		}else{
			$('#content').hide();
			$('#content1').show();
		}
	});
	
	$('.sc-list1 div').click(function(){
		var index = $(this).index();
		$(this).addClass('sel');
		$(this).siblings('div').removeClass('sel');
		if(index==0)
		{
			$('.sc-list2').show();
			$('.sc-list3').hide();
		}else{
			$('.sc-list2').hide();
			$('.sc-list3').show();
		}
	});
});

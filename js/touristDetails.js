$(function(){
	var startYear = 1949;
	var yearLength = 100;
	for(var i=-1;i<=yearLength;i++)
	{
		if(i==-1)
		{
			$('.yearMonth').find('select').append('<option value=""></option>');
		}else{
			
			$('.yearMonth').find('select').append('<option value="'+i+'">'+(startYear+i)+'</option>');
		}
	}
	layui.use('form', function() {
		var form = layui.form;
	});
	//展开更多
	$('.row1 .floatr').click(function(){
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			var h = $(this).parents('.col-sm-1').prev('.col-sm-9').height();
			$(this).parents('.row').animate({'height':h+'px'},500);
			$(this).html('收起&and;');
		}else{
			$(this).attr('isOpen','false');
			$(this).parents('.row').animate({'height':'46px'},500);
			$(this).html('展开&or;');
		}
		
	});
	//选择国家
	$('.row1 a').click(function(){
		
		$(this).addClass('ahasChoice');
		$(this).siblings('a').removeClass('ahasChoice');
	});
	//选择类型
	$('.row button.floatl').click(function(){
		$(this).addClass('btnHas');
		$(this).siblings('button').removeClass('btnHas');
	});
	//选择月份
	$('.yearMonth a').click(function(){
		
		$(this).addClass('aChoice');
		$(this).siblings('a').removeClass('aChoice');
	});
});

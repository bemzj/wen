$(function () {
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#date' //指定元素
        });
    });
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#date1' //指定元素
        });
    });
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#date2' //指定元素
        });
    });
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#date3' //指定元素
        });
    });
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#date4' //指定元素
        });
    });
	//获取高度
	var hs = $('.con-left').height();

	var h; 
	//初始化高度
	if(hs>($('.wrap').height()+80))
	{
		h = hs;
	}else{
		h = $('.wrap').height()+80;
	}
	$('.con-left').height(h);
	$('.con-right').height(h);

    $('#list2-db').find('div').click(function () {

        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
        var index = $(this).index();
        $('.same').hide()
        $('.same'+(index+1)).show();
        if(hs>($('.wrap').height()+80))
		{
			h = hs;
		}else{
			h = $('.wrap').height()+80;
		}
		$('.con-left').height(h);
		$('.con-right').height(h);
    });
    // 弹出删除框
    $('.add-del').click(function () {
        $('#del').show()
    });
    //取消
    $('#canc').click(function () {
        $('#del').hide()
    });
    $('#addman').click(function () {
  
        $('.renyuan').hide();
        $('.list2-lan').hide();
        $('.list2-lanRy').show();
        $('.right-newPeo').show();
        if(hs>($('.wrap').height()+80))
		{
			h = hs;
		}else{
			h = $('.wrap').height()+80;
		}
		$('.con-left').height(h);
		$('.con-right').height(h);
    })
    $('#addFp').click(function () {

        $('.fapiao').hide();
        $('.list2-lan').hide();
        $('.list2-lanFp').show();
        $('.right-newFapiao').show();
        if(hs>($('.wrap').height()+80))
		{
			h = hs;
		}else{
			h = $('.wrap').height()+80;
		}
		$('.con-left').height(h);
		$('.con-right').height(h);
    })
    $('#addQz').click(function () {

        $('.qianzhen').hide();
        $('.list2-lan').hide();
        $('.right-newQz').show();
        if(hs>($('.wrap').height()+80))
		{
			h = hs;
		}else{
			h = $('.wrap').height()+80;
		}
		$('.con-left').height(h);
		$('.con-right').height(h);
    })
    $('#addDz').click(function () {
    	
        $('.dizhi').hide();
        $('.list2-lan').hide();
        $('.list2-lanAdd').show();
        $('#right-newAdd').show();
        if(hs>($('.wrap').height()+80))
		{
			h = hs;
		}else{
			h = $('.wrap').height()+80;
		}
		$('.con-left').height(h);
		$('.con-right').height(h);
    })
	//切换发票
	$('#con-wrap .row .con-right .right-newFapiao .fp-list1 >div').click(function () {
		$(this).siblings('div').removeClass('sel');
		$(this).addClass('sel');
		if($(this).index()<=1)
		{
			$('.qiye').show();
            $('.geren').hide();
		}else{
			$('.geren').show();
            $('.qiye').hide();
		}
    });
})
$(function () {
    var starth = $('.con-left').height();
    var firsth = $('.list2-db div').eq(0).parents('.wrap').height();
    if(starth>=firsth)
    {
        $('.con-right').height(starth);
        $('.con-left').height(starth);
    }else{
        $('.con-right').height(firsth);
        $('.con-left').height(firsth);
    }
    $('.list2-db div').click(function () {
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
        var index = $(this).index();
        $('.wrap-list2').children('div').eq(index).show();
        $('.wrap-list2').children('div').eq(index).siblings('div').hide();
        var h = $(this).parents('.wrap').height();
        if(h>starth)
        {
            $('.con-right').height(h);
            $('.con-left').height(h);
        }else{
            $('.con-right').height(starth);
            $('.con-left').height(starth);
        }
    });
    //日期
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#date' //指定元素
        });
    });
    //上传图片
    layui.use('upload', function(){
        var upload = layui.upload;

        //执行实例
        var uploadInst = upload.render({
            elem: 'upImg' //绑定元素
            ,url: '/upload/' //上传接口
            ,done: function(res){
                //上传完毕回调
            }
            ,error: function(){
                //请求异常回调
            }
        });
    });
})
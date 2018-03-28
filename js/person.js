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
    layui.use('upload', function() {
		var upload = layui.upload;

		//上传头像
		var uploadInst = upload.render({
			elem: '#upImg' //绑定元素
				,
			auto:false
			,
			url: '' //上传接口
			,
			choose: function(obj){
			    //将每次选择的文件追加到文件队列
			    var files = obj.pushFile();
			    
			    //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
			    obj.preview(function(index, file, result){
			      $('.specail').show().find('img').attr('src',result);
			    });
			  },
			done: function(res) {
				//上传完毕回调
			},
			error: function() {
				
			}
		});
		//上传护照
		var uploadInst1 = upload.render({
			elem: '#upImg1' //绑定元素
				,
			auto:false
			,
			url: '' //上传接口
			,
			choose: function(obj){
			    //将每次选择的文件追加到文件队列
			    var files = obj.pushFile();
			    
			    //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
			    obj.preview(function(index, file, result){
			      $('.poster').show().find('img').attr('src',result);
			    });
			  },
			done: function(res) {
				//上传完毕回调
			},
			error: function() {
				
			}
		});
	});
	//发送验证码
	var code = false;
	$('.list3-btn1').click(function(){
		if(code==false)
		{
			var time = 60;
			code = true;
			var self = $(this);
			$(this).text(time+'s后重发');
			var timeTween = setInterval(function(){
				time--;
				if(time==-1)
				{
					clearInterval(timeTween)
					self.text('重新获取');
					code = true;
				}else{
					self.text(time+'s后重发');
				}
				
				
			},1000);
		}
	});
	
	
	$('#con-wrap .row .con-right .right-list5 .chinese .layui-form .form-list3 div.list3-btn').click(function(){
		var time = 60;
		var self = $(this);
		$(this).attr('disabled','disabled');
		$(this).text(time + 's后重发');
		var timeTween = setInterval(function() {
			time--;
			if(time == -1) {
				clearInterval(timeTween)
				self.text('重新获取');
				self.removeAttr('disabled');
			} else {
				self.text(time + 's后重发');
			}
		
		}, 1000);
	});
	
	//外国
	$('#other').click(function(){
		$('.chinese').hide();
		$('.other').show();
		if(starth>=$('.wrap').height())
		{
			$('.con-right').height(starth);
        	$('.con-left').height(starth);
		}else{
			$('.con-right').height($('.wrap').height());
       		 $('.con-left').height($('.wrap').height());
		}
	});
	//外国
	$('#chinese').click(function(){
		$('.chinese').show();
		$('.other').hide();
		if(starth>=$('.wrap').height())
		{
			$('.con-right').height(starth);
        	$('.con-left').height(starth);
		}else{
			$('.con-right').height($('.wrap').height());
       		 $('.con-left').height($('.wrap').height());
		}
	});
})
$(function(){
	//勾选事件
	$('.rpCheck input').on('click',function(){
		if($(this).is(':checked')==true)
		{
			$(this).attr('checked','checked');
			$('.rpCheck >div').addClass('rpCheckHas');
		}else{
			$(this).removeAttr('checked');
			$('.rpCheck >div').removeClass('rpCheckHas');
		}
	});
	//获得验证码(注册)
	var timeCount;
	$('.register .sentCode button').on('click',function(){
		$(this).attr('disabled','disabled');
		$(this).prev('input').focus();
		timeCount = 60;
		var self = $(this);
		self.text("重新获取("+timeCount+")");
		var tTween = setInterval(function(){
			timeCount--;
			if(timeCount==-1)
			{
				clearInterval(tTween);
				self.text("重新获取");
				self.removeAttr('disabled');
			}else{
				self.text("重新获取("+timeCount+")");
			}
		},1000);
	});
	//获得验证码(忘记密码)
	var timeCount;
	$('.forget .sentCode button').on('click',function(){
		$(this).attr('disabled','disabled');
		$(this).prev('input').focus();
		timeCount = 60;
		var self = $(this);
		self.text("重新获取("+timeCount+")");
		var tTween = setInterval(function(){
			timeCount--;
			if(timeCount==-1)
			{
				clearInterval(tTween);
				self.text("重新获取");
				self.removeAttr('disabled');
			}else{
				self.text("重新获取("+timeCount+")");
			}
		},1000);
	});
	//切换
	$('.pCenter').click(function(){
		$('#rightPop').stop().animate({'right':'0px'},500);
	});
	$('.popClose').click(function(){
		$('#rightPop').stop().animate({'right':'-496px'},500);
	});
	$('.login .registerBtn').click(function(){
		$('.login').hide();
		$('.register').show();
	});
	$('.login .forgetA').click(function(){
		$('.login').hide();
		$('.forget').show();
	});
	$('.loginBtn').click(function(){
		$('.login').hide();
		$('.perMessage').show();
	});
});

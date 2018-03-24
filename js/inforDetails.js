$(function(){
	$('.popContent .popBox .popChild > ul > li:nth-child(2) a').click(function(){
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen','true');
			$(this).children('span').addClass('span0');
			$(this).parent('p').next('.otherContent').show();
		}else{
			$(this).attr('isOpen','false');
			$(this).children('span').removeClass('span0');
			$(this).parent('p').next('.otherContent').hide();
		}
		
	});
	$('.popContent .popBox .popChild > ul > li:nth-child(2) .otherContent .oc').click(function(){
		$(this).parent('.otherContent').next('.answer').show();
	})
	$('.popContent .popBox .popChild > ul > li:nth-child(2) p').click(function(){
		$(this).nextAll('.answer').show();
	});
	//打开评论
	var commentStatus = false;
	$('.ridbContent .rcLeft .comment').click(function(){
		if(commentStatus==false)
		{
			commentStatus = true;
			$('.popContent').show();
		}else{
			commentStatus = false;
			$('.popContent').hide();
		}
	});
	//关闭评论
	$('.popContent .popBox .popTitle a').click(function(){
		commentStatus = false;
		$('.popContent').hide();
	});
});

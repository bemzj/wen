$(function(){
	layui.use('form', function() {
		var form = layui.form;
	
	});
	$("body").on("click", ".num-jian", function(m) {
		var obj = $(this).closest("ul").find(".input-num");
		if(obj.val() <= 0) {
			obj.val(0);
		} else {
			obj.val(parseInt(obj.val()) - 1);
		}
		obj.change();
	});
	$("body").on("click", ".num-jia", function(m) {
		var obj = $(this).closest("ul").find(".input-num");
		obj.val(parseInt(obj.val()) + 1);
		obj.change();
	});
	
	$(".tripPerson input").click(function() {
		$(this).siblings("div").children("span").addClass("active");
		$(this).parents("div").siblings("div").find("span").removeClass("active");
	});
	
	//勾选事件
	$('.agreement input').on('click', function() {
		if($(this).is(':checked') == true) {
			$(this).attr('checked', 'checked');
			$(this).prev('span').addClass('spanChoice');
		} else {
			$(this).removeAttr('checked');
			$(this).prev('span').removeClass('spanChoice');
		}
	});
	
	$('.leftCheck input').on('click', function() {
		if($(this).is(':checked') == true) {
			$(this).attr('checked', 'checked');
			$(this).prev('span').addClass('spanChoice');
		} else {
			$(this).removeAttr('checked');
			$(this).prev('span').removeClass('spanChoice');
		}
	});
	//显示弹窗（说明）
	$('.rightExp').click(function(){
		$('.shuoming').show();
	});
	//显示保险（弹窗）
	$('.agreement a').click(function(){
		$('.baoxian').show();
	});
	$('.cengClose').click(function(){
		$(this).parents('.ceng').hide();
	});
})

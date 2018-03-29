//两边高度对齐
function newHeigth() {
    var hl = $('.con-left').outerHeight(true);
    var hr = $('.con-right').outerHeight(true);
    if(hl>hr){
        $('.con-right').css({"height":hl})
    }else{
        $('.con-left').css({"height":hr})
    }
}
$(function () {
    newHeigth();
    //点击显示更多
    $('.mes2').click(function () {
        if($(this).attr('isOpen')=='false'){
        	$(this).attr('isOpen',true);
            $(this).parent('.info').next('.more').show();
            $(this).siblings(".img").addClass("sel");
            $(this).parents('.c2-2').addClass("c2-3");
        }else{
        	$(this).attr('isOpen',false);
            $(this).parent('.info').next('.more').hide();
            $(this).siblings(".img").removeClass("sel");
            $(this).parents('.c2-2').removeClass("c2-3");
        }
    })
    //提现弹框
    $('#tx').click(function () {
        $('#tishi').show();
    })
    $('.wrap-3 button').click(function () {
        $('#tishi').hide();
    })
    //转出到现金余额
    $('#zhuanchu').click(function () {
        // $('#zcje').show();
        // $('#right-fx').hide();
        $('#tixian').show();
    })
    $('.wrap-3 button').click(function () {
        $('#tixian').hide();
        $('#tixian-suc').hide();
    })
    //转出成功
    $('#zc').click(function () {
        $('#tixian-suc').show();
    })
    //充值跳转
    $('.chongzhi').click(function () {
        $('.right-wrap').hide();
        $('.right-cz').show();
    })
    //优惠券跳转
    $('#youhuiquan').click(function () {
        $('.right-wrap').hide();
        $('.right-yhq').show();
    })
    //返现跳转
    $('#fanxian').click(function () {
        $('.right-wrap').hide();
        $('#right-fx').show();
    })
    //切换到交易明细
    $('#jymx').click(function () {
        $('.right-cz').hide();
        $('.right-jymx').show();
    })
    //切换到现金余额
    $('#xjye').click(function () {
        $('.right-wrap').hide();
        $('.right-fx1').show();
    })
    //现金余额切换到提现金额
    $('#tixian1').click(function () {
        $('.right-fx1').hide();
        $('#txje').show();
    })
    //tab切换
    $('.c2-1').find("div").click(function () {
        var index = $(this).index();
        console.log(index)
        if(index==0){
            $(this).addClass("sel");
            $(this).removeClass("sel1");
            $(this).siblings("div").removeClass("sel");
            $(this).siblings("div").removeClass("sel1")
        }else{
            $(this).addClass("sel1");
            $(this).removeClass("sel");
            $(this).siblings("div").removeClass("sel1");
            $(this).siblings("div").removeClass("sel")
        }
    })
    //优惠券tab切换
    $('.tab').find("div").click(function () {
        $(this).addClass("sel");
        $(this).siblings("div").removeClass("sel")
    })
    //支付方式
    $('.payThree a').click(function(){
        $(this).addClass('payChoice');
        $(this).siblings('a').removeClass('payChoice');
    });
})
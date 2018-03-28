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
    var a1 = true;
    $('.mes2').click(function () {
        if(a1==true){
            $('.more').show();
            $(this).siblings("img").addClass("sel");
            $('#c2-3').addClass("c2-3");
            a1 = false;
        }else{
            $('.more').hide();
            $(this).siblings("img").removeClass("sel");
            $('#c2-3').removeClass("c2-3");
            a1 = true;
        }
    })
    //提现弹框
    $('.tixian').click(function () {
        $('.tishi').show();
    })
    $('.wrap-3 button').click(function () {
        $('.tishi').hide();
    })
    //转出到现金余额
    $('#zhuanchu').click(function () {
        $('#tixian').show();
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
})
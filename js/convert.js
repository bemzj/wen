$(function () {
    $('#qh').click(function () {
        $('#mask').show();
        $('.qhdz').show();
    })
    $('#mask').click(function () {
        $('.qhdz').hide();
        $(this).hide();
    })
    //切换地址复选
    $('.slide1 input').click(function () {
        if($(this).is(':checked')==true){
            $(this).prev('div').addClass("check");
            $(this).attr({"checked":"checked"});
        }else{
            $(this).prev('div').removeClass("check");
            $(this).removeAttr("checked");
        }
        $('.qhdz').hide();
        $('#mask').hide();
    });

})
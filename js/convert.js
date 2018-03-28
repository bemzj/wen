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
    var fx = true;
    var fx1 = true;
    $('#awesome1').click(function () {
        console.log(1)
        if(fx==true){
            $('.list-1 div').addClass("check");
            $(this).attr({"checked":"checked"})
            fx = false;
        }else{
            $('.list-1 div').removeClass("check");
            $(this).removeAttr("checked")
            fx = true;
        }
    })
    $('#awesome2').click(function () {
        if(fx1==true){
            $('.list-2 div').addClass("check");
            $(this).attr({"checked":"checked"})
            fx1 = false;
        }else{
            $('.list-2 div').removeClass("check");
            $(this).removeAttr("checked")
            fx1 = true;
        }
    })
})
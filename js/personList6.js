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
    $('.pay').click(function () {
        $('#pay').show();
        $('#mask').show();
    })
    // $('.tuikuan').click(function () {
    //     $('#cancel').show();
    //     $('#mask').show();
    // })
    $('.btn1').click(function () {
        $('.right-wrap').hide();
        $('.right-wrap2').show();
    })
    //选中判断
    var che = true;
    $('#awesome').click(function () {
        if(che==true){
            $('.list3-2 div').addClass("check");
            $(this).attr({"checked":"checked"})
            che = false;
        }else{
            $('.list3-2 div').removeClass("check");
            $(this).removeAttr("checked")
            che = true;
        }
    })
    //复选
    var fx = true;
    var fx1 = true;
    var fx2 = true;
    var fx3 = true;
    $('.awesome1').click(function () {
        if(fx==true){
            $('.list1 div').addClass("check");
            $(this).attr({"checked":"checked"})
            fx = false;
        }else{
            $('.list1 div').removeClass("check");
            $(this).removeAttr("checked")
            fx = true;
        }
    })
    $('.awesome2').click(function () {
        if(fx1==true){
            $('.list2 div').addClass("check");
            $(this).attr({"checked":"checked"})
            fx1 = false;
        }else{
            $('.list2 div').removeClass("check");
            $(this).removeAttr("checked")
            fx1 = true;
        }
    })
    $('.awesome3').click(function () {
        if(fx2==true){
            $('.list3 div').addClass("check");
            $(this).attr({"checked":"checked"})
            fx2 = false;
        }else{
            $('.list3 div').removeClass("check");
            $(this).removeAttr("checked")
            fx2 = true;
        }
    })
    $('.awesome4').click(function () {
        if(fx3==true){
            $('.list4 div').addClass("check");
            $(this).attr({"checked":"checked"})
            fx3 = false;
            $('.li1 div').addClass("check");
        }else{
            $('.list4 div').removeClass("check");
            $(this).removeAttr("checked")
            fx3 = true;
            $('.li1 div').removeClass("check");
        }
    })
})
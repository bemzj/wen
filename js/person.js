$(function () {
    var hl = $('.con-left').outerHeight(true);
    var hr = $('.con-right').outerHeight(true);
    if(hl>hr){
        hr=hl;
        $('.con-right').css({"height":hr})
    }else{
        hl=hr
        $('.con-left').css({"height":hl})
    }
    if($('#con-wrap').height()<700){
        $('#con-wrap').css({"height":700})
    }
    // $('#chinese').click(function () {
    //     $(this).addClass("sel")
    //     $("#other").removeClass("sel")
    // })
    var btns = $(".list5-d1 div")
    var wraps = $(".chinese,.other")
    var cliens = $(".con-left,.con-right")
    console.log(wraps)
    for(let i = 0;i<btns.length;i++){
            btns.eq(i).click(function () {
                for(let j = 0;j<btns.length;j++){
                    btns.eq(j).removeClass("sel");
                    wraps.eq(j).hide();
                }
                $(this).addClass('sel')
                wraps.eq(i).show()
            })
        }
})
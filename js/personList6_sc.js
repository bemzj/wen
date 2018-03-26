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
    $('#list2-db').find('div').click(function () {
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel')
    })
    $('.L2-3').click(function () {
        $('.sc').hide();
        $('.sc-detail').show();
        newHeigth();
    })
})
var btns = $('#list2-db div');
var clients = $('.renyuan,.dizhi,.fapiao,.qianzhen')

$(function () {
    var hl = $('.con-left').outerHeight(true);
    var hr = $('.con-right').outerHeight(true);
    if(hl>hr){
        $('.con-right').css({"height":hl})
    }else{
        $('.con-left').css({"height":hr})
    }
    $('#list2-db').find('div').click(function () {
        var hl = $('.con-left').outerHeight(true);
        var hr = $('.con-right').outerHeight(true);
        if(hl>hr){
            $('.con-right').css({"height":hl})
        }else{
            $('.con-left').css({"height":hr})
        }
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
        var index = $(this).index();
        $('.ry').hide();
        clients.eq(index).show()
    })
    $('.add-del').click(function () {
        $('#del').show()
    })
    $('#canc').click(function () {
        $('#del').hide()
    })
})
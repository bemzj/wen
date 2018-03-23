var btns = $('#list2-db div');
var clients = $('.renyuan,.dizhi,.fapiao,.qianzhen')
var qz = $('#right-newQz').height();
var fp = $('#right-newFapiao').height();
var dz = $('#right-newAdd').height();
var ry = $('#right-newPeo').height();
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
    $('#addman').click(function () {
        $('.renyuan').hide();
        $('.list2-lan').hide();
        $('.list2-lanRy').show();
        $('.right-newPeo').show();
    })
    $('#addFp').click(function () {
        $('.fapiao').hide();
        $('.list2-lan').hide();
        $('.list2-lanFp').show();
        $('.right-newFapiao').show();
    })
    $('#addQz').click(function () {
        $('.con-left').css({"height":qz})
        // $('.con-right').css({"height":qz})
        $('.qianzhen').hide();
        $('.list2-lan').hide();
        $('.right-newQz').show();
    })
    $('#addDz').click(function () {
        $('.dizhi').hide();
        $('.list2-lan').hide();
        $('.list2-lanAdd').show();
        $('#right-newAdd').show();
    })
})
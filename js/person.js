var btns = $('#list2-db div');
var clients = $('.ziliao,.mima,.shouji,.shimin')
console.log(clients)
$(function () {
    var hl = $('.con-left').outerHeight(true);
    var hr = $('.con-right').outerHeight(true);
    console.log(hl,hr)
    // if(hl>hr){
    //     $('.con-right').css({"height":hl})
    // }else{
    //     $('.con-left').css({"height":hr})
    // }
    $('#list2-db').find('div').click(function () {
        var hl = $('.con-left').outerHeight(true);
        var hr = $('.con-right').outerHeight(true);
        if(hl>hr){
            $('.con-right').css({"height":hl})
        }else{
            $('.con-left').css({"height":hr})
        }
        console.log(1)
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
        var index = $(this).index();
        $('.ry').hide();
        console.log(index);
        clients.eq(index).show()
    })
    $('#sc-list1').find('div').click(function () {
        console.log(1)
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
        var index = $(this).index();
        $('.clien').hide();
        $('.sc-list2,.sc-list3').eq(index).show()
    })
    $('.add-del').click(function () {
        $('#del').show()
    })
    $('#canc').click(function () {
        $('#del').hide()
    })
    $('#chinese').click(function () {
        $('.chinese').show();
        $('.other').hide();
    })
    $('#other').click(function () {
        $('.other').show();
        $('.chinese').hide();
    })
    $('#sc-btn').click(function () {
        $('#content').show();
        $('#content1').hide();
        $(this).addClass("sel")
        $('#fk-btn').removeClass("sel")
    })
    $('#fk-btn').click(function () {
        $('#content1').show();
        $('#content').hide();
        $(this).addClass("sel")
        $('#sc-btn').removeClass("sel")
    })
})
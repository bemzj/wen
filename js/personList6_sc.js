$('#list2-db').find('div').click(function () {
    $(this).addClass('sel');
    $(this).siblings('div').removeClass('sel')
})
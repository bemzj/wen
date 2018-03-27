$(function () {
    $('.list1-2').find("div").click(function () {
        $(this).addClass("sel");
        $(this).siblings("div").removeClass("sel")
    })
})
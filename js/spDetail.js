//商品详情页面小图轮播
var mySwiper3 = new Swiper('#swiper3',{
    pagination: '.swiper-pagination',
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 18,
    freeMode: true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next'
});
var num = 1;
$(function () {
    //小图变大图
    $('.sw').mouseover(function () {
        var src = $(this).find("img").attr('src');
        $('#big').attr({
            src:src
        })
    })
    //规格选择
    $('.r3-2').find("div").click(function () {
        $(this).addClass("sel");
        $(this).siblings("div").removeClass("sel");
    })
    //减少购买数量
    $('.prevNum').click(function () {
        if(num<2){
            num = 1
        }else{
            num--
        }
        if(num>1){
            $('.num').html(num);
        }else{
            $('.num').html(1);
        }
    })
    //增加购买数量
    $('.nextNum').click(function () {
        num++;
        $('.num').html(num);
        console.log(num)
    })
    //产品介绍，产品详情切换
    $('.list2-tab').find("div").click(function () {
        $(this).addClass("sel");
        $(this).siblings("div").removeClass("sel");
    })
    $('.jifen').find("div").click(function () {
        $(this).addClass("sel");
        $(this).siblings("div").removeClass("sel");
    })
})
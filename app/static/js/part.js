//图片跟随
window.onload = function () {
    $(".ol_list>ol li").mouseover(function () {

        var index = $(this).index(".ol_list>ol li");
        $(".ol_list>ol li:eq(" + index + ")").addClass("_xiaotu").siblings().removeClass("_xiaotu");
        $(".shop_main .shop_left .f_left li:eq(" + index + ")").addClass("active").siblings().removeClass("active");
        $(".shop_main .shop_left .f_right li:eq(" + index + ")").addClass("_datu").siblings().removeClass("_datu");
    });
    //放大镜
    $(".f_left").mouseover(function () {
        $(".f_left ._xuan").css("display", "block");
        $(".f_right").css("display", "block");
    });


    $(".f_left").mousemove(function (e) {
        var e = e || event;
        var l = e.pageX - $(".f_left").offset().left - $("._xuan").width() / 2;
        var t = e.pageY - $(".f_left").offset().top - $("._xuan").height() / 2;
        //边界
        //小框的偏移量
        var xiaopl = $("._xuan").position().left;
        var xiaopt = $("._xuan").position().top;
        //判断边界  

        var maxeel = $(".f_left").width() - $("._xuan").width();
        var maxeet = $(".f_left").height() - $("._xuan").height();

        //定义偏移大小,
        l = l < 0 ? 0 : (l > maxeel ? maxeel : l);
        t = t < 0 ? 0 : (t > maxeet ? maxeet : t);

        //写入left和top
        $("._xuan").css({ left: l + "px", top: t + "px" });

        var bigImgL = l * $("._datu img").width() / $(".f_left").width();
        var bigImgT = t * $("._datu img").height() / $(".f_left").height();

        $("._datu img").css({ left: -bigImgL + "px" });
        $("._datu img").css({ top: -bigImgT + "px" });
    });
    $(".f_left").mouseout(function () {
        $(".f_left ._xuan").css("display", "none");
        $(".f_right").css("display", "none");
    });
    //左右移动
    $(".right").on("click", function () {
        $(".ol_list ol").css({ left: -85 });
    });
    $(".left").on("click", function () {
        $(".ol_list ol").css({ left: 0 });
    });
};
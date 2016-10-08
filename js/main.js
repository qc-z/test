/**
 * Created by Administrator on 2016/10/6.
 */
$(document).ready(function (){
   function resize (){
       var windowWidth = $(window).width();
       var isSmallScreen = windowWidth < 768 ;
       $("#carousel-example-generic > .carousel-inner > .item").each(function (i,value){
           var $value = $(value);
           var imgSrc = isSmallScreen ? $value.data("image-xs"):$value.data("image-lg");
           $value.css("backgroundImage","url('"+imgSrc+"')");

           if (isSmallScreen) {
               $value.html('<img src="' + imgSrc + '" alt="" />');
           } else {
               $value.empty();
           }

       });
   }
    $(window).on("resize",resize).trigger("resize");

    // 初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip();



//    选项卡滚动


    var $navtabs = $(".nav-tabs");
    var width = 30; //默认有padding-left  20px；
    $navtabs.children().each(function (i,value){
        width += $(value).width();
    });


    if($(window).width() < width){
        $navtabs.css("width",width).parent().css("overflow-x","scroll");
    }

    var $newsTitle = $(".news-title");
    $("#news .nav-pills a").on("click mouseenter",function (){
       var $this = $(this);
        //console.log($this.data("title"));
        $newsTitle.text($this.data("title"));

    });



//    获取容器
    var $carousels = $(".carousel");
    var starX, endX;
    var len = 50;//规定范围


//    调用.carousel('prev')  .carousel('next') 方法

//    注册事件
    $carousels.on("touchstart",function (e){
        //    手指开始移动  touchstart
        //console.log(e.originalEvent.touches["0"].clientX);
        starX = e.originalEvent.touches["0"].clientX;
    });
    $carousels.on("touchmove",function (e){
        //    比较手指移动过程的坐标 touchmove
        //console.log(e.originalEvent.touches["0"].clientX);
        endX = e.originalEvent.touches["0"].clientX;
        //console.log(endX);
    });
    $carousels.on("touchend",function (e){
        //    比较手指最后的坐标 touchend
        var end = Math.abs(starX - endX);
        //console.log(end);
        if (end > len){
            $(this).carousel(starX - endX >0?"next":"prev");

        }
    });



})


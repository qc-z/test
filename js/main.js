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

})


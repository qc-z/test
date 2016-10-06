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
})


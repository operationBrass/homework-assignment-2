$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 600) {
          $(".header-nav a").css("color" , "rgba(194, 86, 44, 0.787)");
        }
  
        else{
            $(".header-nav a").css("color" , "rgba(255, 251, 0, 0.5)");
        }
    })
  })
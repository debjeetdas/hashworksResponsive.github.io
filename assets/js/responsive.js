var which_one_clicked1 = 0;
if($(window).width() <= 1199)
{
    $(".thinking-height").addClass("col-md-6 col-sm-6 col-xs-6");
    $(".thinking-height").addClass("col-md-6 col-sm-6 col-xs-6");

  $("#div-top-left").click(function(){
    if(which_one_clicked1 == 0){
      which_one_clicked1=1;
      $("#hw-ribbon-our-thinking-footer").css("display","none");
      $(this).removeClass("thinking-height");
      $(this).animate({'width' : '100%','height' : '77.4vh'},844); 
      $("#div-top-right").animate({'width' : '0%','height' : '0vh'},844); 
      $("#div-bottom-right").animate({'width' : '0%','height' : '0vh'},844); 
      $("#div-bottom-left").animate({'width' : '0%','height' : '0vh'},844);
      setTimeout(function () {$("#div-top-left").addClass("ot-werelve-wepractice"); },800);
      $("#collapse-image-1").css("display","block");
      $("#collapse-image-1").animate({"opacity":"1"},844);
      $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"7%"},844);
    }
    });

   $("#div-top-right").click(function(){
    if(which_one_clicked1 == 0){
      which_one_clicked1=2;
      $("#hw-ribbon-our-thinking-footer").css("display","none");
      $(this).removeClass("thinking-height");
      $(this).animate({'width' : '100%','height' : '77.4vh'},844); 
      $("#div-top-left").animate({'width' : '0%','height' : '0vh'},844); 
      $("#div-bottom-right").animate({'width' : '0%','height' : '0vh'},844); 
      $("#div-bottom-left").animate({'width' : '0%','height' : '0vh'},844);
      setTimeout(function () {$("#div-top-right").addClass("ot-werelve-wepractice"); },800);
      $("#collapse-image-2").css("display","block");
      $("#collapse-image-2").animate({"opacity":"1"},844);
      $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"7%"},844);
    }
    });

     $("#div-bottom-left").click(function(){
      if(which_one_clicked1 == 0){
      which_one_clicked1=3;
      $("#hw-ribbon-our-thinking-footer").css("display","none");
      $(this).removeClass("thinking-height");
      $(this).animate({'width' : '100%','height' : '54.4vh'},844); 
      $("#div-bottom-right").animate({'width' : '0%','height' : '0vh'},844);
      $("#div-top-right").animate({'width' : '0%','height' : '0vh'},844); 
      $("#div-top-left").animate({'width' : '0%','height' : '0vh'},844);  
      setTimeout(function () {$("#div-bottom-left").addClass("ot-wepartner-weaccelrte");
      $("#buisness-tab").removeClass("thinking-height2"); },800);
      $("#collapse-image-3").css("display","block");
      $("#collapse-image-3").animate({"opacity":"1"},844);
      $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"7%"},944);
    }
    });

   $("#div-bottom-right").click(function(){
    if(which_one_clicked1 == 0){
      which_one_clicked1=4;
      $("#hw-ribbon-our-thinking-footer").css("display","none");
      $(this).removeClass("thinking-height");
      $(this).animate({'width' : '100%','height' : '54.4vh'},844);        
      $("#div-bottom-left").animate({'width' : '0%','height' : '0vh'},844); 
      $("#div-top-right").animate({'width' : '0%','height' : '0vh'},844); 
      $("#div-top-left").animate({'width' : '0%','height' : '0vh'},844); 
      setTimeout(function () {$("#div-bottom-right").addClass("ot-wepartner-weaccelrte");
      $("#buisness-tab").removeClass("thinking-height2"); },800);
      
      $("#collapse-image-4").css("display","block");
      $("#collapse-image-4").animate({"opacity":"1"},844);
      $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"7%"},844);
}
    });

   $(".collapse-button").click(function(){
          var navtab = $(".bs-example").offset().top + 0;
                  $('html, body').animate({
            scrollTop: navtab}, 500, 'linear');
        if(which_one_clicked1 == 4){
          which_one_clicked1 = 0;
          $("#div-bottom-right").removeClass("ot-wepartner-weaccelrte");
          $("#buisness-tab").addClass("thinking-height2"); 
          $("#collapse-image-4").css("display","none");
          $("#collapse-image-4").animate({"opacity":"0"},844);
          $("#div-bottom-right").addClass("thinking-height");
          $("#div-bottom-right").animate({'height' : '77.4vh'},0); 
          $("#div-bottom-right").css("bottom","0");
        }
        else if(which_one_clicked1 == 3){
          which_one_clicked1 = 0;
          $("#div-bottom-left").removeClass("ot-wepartner-weaccelrte");
          $("#buisness-tab").addClass("thinking-height2"); 
          $("#collapse-image-3").css("display","none");
          $("#collapse-image-3").animate({"opacity":"0"},844);
          $("#div-bottom-left").addClass("thinking-height");
          $("#div-bottom-left").animate({'height' : '77.4vh'},0); 
          $("#div-bottom-left").css("bottom","0");
        }
        else if(which_one_clicked1 == 2){
          which_one_clicked1 = 0;
          $("#div-top-right").removeClass("ot-werelve-wepractice");
          $("#collapse-image-2").css("display","none");
          $("#collapse-image-2").animate({"opacity":"0"},844);
          $("#div-top-right").addClass("thinking-height");
          $("#div-top-right").animate({'height' : '77.4vh'},0); 
        }
        else if(which_one_clicked1 == 1){
          which_one_clicked1 = 0;
          $("#div-top-left").removeClass("ot-werelve-wepractice"); 
          $("#collapse-image-1").css("display","none");
          $("#collapse-image-1").animate({"opacity":"0"},844);
          $("#div-top-left").addClass("thinking-height");
          $("#div-top-left").animate({'height' : '77.4vh'},0); 
        }
      
      
        setTimeout(function(){$("#hw-ribbon-our-thinking-footer").css("display","block");}, 1000);
      $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"29%"},844);
      $("#div-bottom-right").animate({'width' : '50%','height' : '25.7vh'},844);       
      $("#div-bottom-left").animate({'width' : '50%','height' : '25.7vh'},844); 
      $("#div-top-right").animate({'width' : '50%','height' : '25.7vh'},844); 
      $("#div-top-left").animate({'width' : '50%','height' : '25.7vh'},844); 
    });
  
   $("li.c-flex").click(function(){
        if(which_one_clicked1 == 4){
          which_one_clicked1 = 0;
          $("#collapse-image-4").css("display","none");
          $("#collapse-image-4").animate({"opacity":"0"},0);
          $("#div-bottom-right").addClass("thinking-height");
          $("#div-bottom-right").animate({'height' : '77.4vh'},0); 
          $("#div-bottom-right").css("bottom","0");
        }
        else if(which_one_clicked1 == 3){
          which_one_clicked1 = 0;
          $("#collapse-image-3").css("display","none");
          $("#collapse-image-3").animate({"opacity":"0"},0);
          $("#div-bottom-left").addClass("thinking-height");
          $("#div-bottom-left").animate({'height' : '77.4vh'},0); 
          $("#div-bottom-left").css("bottom","0");
        }
        else if(which_one_clicked1 == 2){
          which_one_clicked1 = 0;
          $("#collapse-image-2").css("display","none");
          $("#collapse-image-2").animate({"opacity":"0"},0);
          $("#div-top-right").addClass("thinking-height");
          $("#div-top-right").animate({'height' : '77.4vh'},0); 
        }
        else if(which_one_clicked1 == 1){
          which_one_clicked1 = 0;
          $("#collapse-image-1").css("display","none");
          $("#collapse-image-1").animate({"opacity":"0"},0);
          $("#div-top-left").addClass("thinking-height");
          $("#div-top-left").animate({'height' : '77.4vh'},0); 
        }
      
      $("#hw-ribbon-our-thinking-footer").css("display","block");
      $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"29%"},0);
      $("#div-bottom-right").animate({'width' : '50%','height' : '25.7vh'},0);       
      $("#div-bottom-left").animate({'width' : '50%','height' : '25.7vh'},0); 
      $("#div-top-right").animate({'width' : '50%','height' : '25.7vh'},0); 
      $("#div-top-left").animate({'width' : '50%','height' : '25.7vh'},0); 
    });




// responsive ends
} 
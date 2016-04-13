$(document).ready(function(){
$(document.body).on('click', '.dropdown-menu li', function(event) {
      var $target = $(event.currentTarget);

      $target.closest('.btn-group')
          .find('[data-bind="label"]').text($target.text()).css("color", "black")
          .end()
          .children('.dropdown-toggle').dropdown('toggle');

      return false;

  });
$('.bootcamp-dropdown-list').click(function(e) {
   e.stopPropagation();
});
       // upskilling 

      //filter
        $('.hw-upskilling-filter li').click(function(){
            $('.hw-upskilling-filter li').removeClass('active');
            $(this).addClass('active');

            var dataval = $(this).attr("data-value");

            $('.upskill-cont-filter').each(function(){
              if($(this).hasClass(dataval)) {
                $(this).css({'display':'block'});
              }
              else {
                $(this).css({'display':'none'});
              }
              
            });

        });


      // End of upskilling

      // upskilling-casestudy collapse

        //arrow - toggle rotate
        $('#upskill-accordion .accordion-toggle').click(function(){
          $(this).children().children().children().next().children().children().toggleClass("arrow-rotate");
        });
      // End of upskilling-casestudy collapse

      // service details
        $('.filter').click(function(){
          var dtab = $(this).attr("data-tab");
          
          $('.filter').removeClass('active');
          $(this).addClass('active');

          $('.filter-content').each(function(){
              var dval = $(this).attr("data-value");
              if(dtab == dval) {
                $(this).addClass('active');
              }
              else {
                  $(this).removeClass('active');
              }
          });
        });
      // End of service detials

 // casestudy

      //filter
        $('.hw-casestudy-filter li').click(function(){
          
            $('.hw-casestudy-filter li').removeClass('active');
            $(this).addClass('active');

            var dataval = $(this).attr("data-value");
           
            case_study_filter(dataval);

        });


      var case_study_filter = function(dataval) {
        $('.casestudy-cont-filter').each(function(){
        if($(this).hasClass(dataval)) {
          $(this).css({'display':'block'});
        }
        else {
          $(this).css({'display':'none'});
        }
        });
      }

      // End of casestudy

 /*for filtering in bootcamp*/

var no_of_total_bootcamp_item=0;
$(".bc-mob .upskill-cont-filter").each(function(){
  no_of_total_bootcamp_item++;
      });
$(".bc-mob .bootcamp-filter-total-no").text(no_of_total_bootcamp_item);

function bootcamp_filter_function(){
    $(".bc-mob .no_of_matched_case_item").remove();
    var no_of_matched_item=0;
     if ($(".bc-mob .bootcamp-dataops-checkbox-1").prop('checked')==true){
      $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="dataops"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="dataops"){
          $(this).css("display","none");
        }
      });
      }

     if ($(".bc-mob .bootcamp-devops-checkbox-1").prop('checked')==true){
      $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="devops"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="devops"){
          $(this).css("display","none");
        }
      });
      }

      if ($(".bc-mob .bootcamp-datascie-checkbox-1").prop('checked')==true){
      $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="data science"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="data science"){
          $(this).css("display","none");
        }
      });
      }

      if ($(".bc-mob .bootcamp-ui-ux-checkbox-1").prop('checked')==true){
      $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="ui"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="ui"){
          $(this).css("display","none");
        }
      });
      }
      if ($(".bc-mob .bootcamp-mobility-checkbox-1").prop('checked')==true){
      $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="mobility"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".bc-mob .upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="mobility"){
          $(this).css("display","none");
        }
      });
      }
      
      $(".bc-mob .bootcamp-filter-total-no").text(no_of_matched_item+"/"+no_of_total_bootcamp_item);
      if(no_of_matched_item==0)
      $(".bc-mob .hw-upskilling-details  ").append('<div class="gotham-rounded-light no_of_matched_case_item text-center" style="color:#ee2b7b;margin-top:40px;margin-bottom:40px"><p>sorry, no match found</p></div>');
}

  $(".bc-mob .bootcamp-mobility-checkbox-1,.bc-mob .bootcamp-client-checkbox-1,.bc-mob .bootcamp-dataops-checkbox-1,.bc-mob .bootcamp-devops-checkbox-1,.bc-mob .bootcamp-datascience-checkbox-1,.bc-mob .bootcamp-ui-ux-checkbox-1").click(function(){
bootcamp_filter_function();
});

$('.bootcamp-dropdown-menu').click(function(e){
  e.stopPropagation();
  $('.dropdown-toggle').dropdown('toggle');
});
 
/*end filtering in bootcamp*/ 
 });
       
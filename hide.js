$(document).ready(function(){
  $("#showBsc").click(function(){
   $("div2").hide();
     $("div1").show();
     $("div3").hide();
     closeNav();
  });
 });

$(document).ready(function(){
  $("#showMCA").click(function(){
    $("div2").show();
     $("div1").hide();
     $("div3").show();
          closeNav();

     
  });
 });
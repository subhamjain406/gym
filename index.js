$(document).ready(function(){
  $(window).scroll(function(){
    var positionTop = $(document).scrollTop();
    console.log(positionTop);
    if(positionTop > 2){
      $(".icon1").addClass("animate1");
      $(".icon2").addClass("animate2");
      $(".icon3").addClass("animate3");
      $(".icon4").addClass("animate4");
      setTimeout(function(){
        $("#section-1").removeClass("section-1");
      },700);
    }
    if(positionTop > 3000){
      $(".image1").addClass("animate");
      $(".image2").addClass("animate");
      $(".image3").addClass("animate");
    }
  });
});

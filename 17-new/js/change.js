(function(){
  var windowW = window.innerWidth,
      windowH = window.innerHeight;
  $(".page").each(function(){
    $(this).width(windowW);
    $(this).height(windowH);
  });
  touch.on($(".page1"), 'swipeup', function(e){
    if(e.y<-140)$(".wp-inner").css("transform", "translateY(-"+windowH+"px)");
  });
  $(".item").each(function(index){
    $(this).bind("click", function(){
      window.item_index = index;
      $(".page3").css("display", "block");
      $('.wp-inner').css("transform", "translateY(-"+2*windowH+"px)");
      setTimeout(function(){$(".dr-item img").eq(index).addClass("active wobble");},1000);
    })
  });
  $(".page2-j").click(function(){
    $(".page3").css("display", "none");
    $(".wp-inner").css("transform", "translateY(-"+windowH*2+"px)");
  });
  $(".btn-back").click(function(){
    $(".wp-inner").css("transform", "translateY(-"+windowH+"px)");
    $(".flip").css("display", "none");
    $(".ball-point").show();
    $(".flip").removeClass("flip");
    $("#ball").removeClass("active pushball rotateball");
    $(".zoomOut").removeClass("zoomOut active");
    $("#modal").css("display", "none");
    $(".dr-cards").css("display", "none");
  });
  $(".btn-join").click(function(){
    $(".wp-inner").css("transform", "translateY(-"+windowH*3+"px)");
    $(".flip").css("display", "none");
    $(".flip").removeClass("flip");
    $("#modal").css("display", "none");
    $(".dr-cards").css("display", "none");
  });
})()

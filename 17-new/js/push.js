(function(){
  touch.on($("#ball"), 'swipeup', function(e){
    if(e.y<-140){
      $("#ball").addClass("active pushball");
      $(".ball-point").hide();
      $("#ball").one("webkitAnimationEnd", function(){
        $(".dr-item .active").removeClass("wobble");
        $(".dr-item .active").addClass("zoomOut");
        $(this).addClass("rotateball");
        setTimeout(function(){
          $("#modal").show();
          $(".dr-cards").show();
          $("#ball").unbind('animationend').unbind('webkitAnimationEnd');
          if(window.item_index != undefined) {
            $(".dr-card").eq(window.item_index).show();
            $(".dr-card").eq(window.item_index).addClass("flip");
          }
        }, 4000);
      });
    }
  });
})();
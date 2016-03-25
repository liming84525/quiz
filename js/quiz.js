$(function(){
  if("ontouchstart" in window ) {
      $("#bg").on({
        touchstart:function(){
          $("#wrapper > ul").addClass("move1")
        },
        touchmove:function(){

        },
        touchend:function(){

        }
      })
  }

  $(".question.active > .answer > li").on({
    touchstart:function(event){
      $("#wrapper > ul").removeClass("move1").addClass("move2")
    }
  })

  $(window).load(function(){
    $("#loader").fadeOut(300)
  })

})

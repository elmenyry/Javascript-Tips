$(function() {

			var controller = new ScrollMagic.Controller();

      var fadein_tween = TweenMax.to('.my_image_profil', .375,{ left: 0 });
      var right_text = TweenMax.to('.profil_description', .375,{ right: 0 });
      

      var scene = new ScrollMagic.Scene({
        triggerElement: ".logo",
        duration: $(window).height() - 100,
        triggerHook: 0,
        reverse: true
      })
      .setTween(fadein_tween)
      .addTo(controller);

      var scene2 = new ScrollMagic.Scene({
        triggerElement: ".logo",
        duration: $(window).height() - 100,
        triggerHook: 0,
        reverse: true
      })
      .setTween(right_text)
      .addTo(controller);



});


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(window).scroll(function () {
   $('.hello2').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(".image").addClass('display')
          $(".image").addClass('animated')
          $(".image").addClass('slideInLeft')

      }
   });

   $('.ar-step').each(function(){
    if (isScrolledIntoView(this) === true) {
      console.log('HELLO')
          
          $('.ar-step').addClass('animated')
          $('.ar-step').addClass('rotateIn ')
          $('.ar-step').addClass('')

      }
   })
});
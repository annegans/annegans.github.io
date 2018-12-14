
$( document ).ready(function() {
	
  // $(function() { 
		// $("#main-content > .row").niceScroll();
	 //  });


    $('.test-svg').on('click',function(e){
      e.preventDefault();
      $(this).addClass('scale-up');
      
   hello()
   fadeout()
 });

  
  $(function(){
    $("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
    $(".post").wrap("<td></td>");
    $("html, body").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
    });
  });

     // setTimeout(function(){
     //   $('img').attr('src',' ').css('opacity','0')
     // },4900);
     
     // $(this).addClass('scale-up');
     
     // setTimeout(function(){
     //   $('.btn').removeClass('scale-up');
     // },4000);
     
    // }) ;

 function hello(){
      console.log("hello")
      // $('.img-test').attr('src','img/explosion.gif').css('opacity','1');
      // window.location = 'home.html';
    }

  function fadeout(){
     window.location = 'home.html';
    // $('.begin-screen').fadeOut();
    // $('.begin-screen').addClass('gone')
  }
});



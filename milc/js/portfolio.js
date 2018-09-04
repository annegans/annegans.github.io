$( document ).ready(function() {
    console.log( "ready!" );


imagesLoaded('.js-images-loaded', () => {
  new Masonry(document.querySelector('.js-masonry'), {
    itemSelector: '.js-masonry-item'
  });
});


new AnimOnScroll( document.getElementById( 'grid' ), {
	minDuration : 0.4,
	maxDuration : 0.7,
	viewportFactor : 0.2
} );


});
$( document ).ready(function() {
    console.log( "ready!" );


imagesLoaded('.js-images-loaded', () => {
  new Masonry(document.querySelector('.js-masonry'), {
    itemSelector: '.js-masonry-item'
  });
});
 
});
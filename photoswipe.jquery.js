/**
 * Load PhotoSwipe once page is ready
 */
 
Drupal.behaviors.photoswipe = function(context) {
  // Set options
  var options = photoswipeConfig;

  // Identify all existing galleries
  var galleries = null;
  $("div[class*=photoswipe-gallery-]").each(function(index) {
    galleries += $(this).attr('class') + ' ';
  });

  // Identify and instanciate all photoswipe galleries
  var regexp = /photoswipe\-gallery\-(\S*)/g; // regexp to find all the existing galleries identifiers (starting with photoswipe-gallery-)
  if (galleries != null) { // else no div found
    galleries = ($.unique(galleries.match(regexp))).sort();
    galleries.forEach(function(item) {
      // window.Code.PhotoSwipe.attach( $('.' + item + ' a'), options);
      window.Code.PhotoSwipe.attach( window.document.querySelectorAll('.' + item + ' a'), options );
    });
  }
  
};

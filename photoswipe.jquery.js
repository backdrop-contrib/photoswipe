/**
 * Load PhotoSwipe once page is ready
 */

Drupal.behaviors.photoswipe = {
  attach: function (context, settings) {
    // Set options
    var options = photoswipeConfig;
  
    // Identify all existing galleries
    var galleries = null;
    jQuery("div[class*=photoswipe-gallery-]").each(function(index) {
      galleries += jQuery(this).attr('class') + ' ';
    });
   console.log(galleries);
    console.log("toto");
    // Identify and instanciate all photoswipe galleries
    var regexp = /photoswipe\-gallery\-(\S*)/g; // regexp to find all the existing galleries identifiers (starting with photoswipe-gallery-)
    if (galleries != null) { // else no div found
      galleries = (jQuery.unique(galleries.match(regexp))).sort();
      console.log(galleries);
      galleries.forEach(function(item) {
        // window.Code.PhotoSwipe.attach( $('.' + item + ' a'), options);
        window.Code.PhotoSwipe.attach( window.document.querySelectorAll('.' + item + ' a'), options );
      });
    }
  }
};

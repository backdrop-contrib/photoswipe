/**
 * Load PhotoSwipe once page is ready
 */
Drupal.behaviors.photoswipe = function(context) {
  var photoswipe = Drupal.settings.photoswipe;

  // Set options
  var options = {
    imageScaleMethod: "fitNoUpscale",
    allowRotationOnUserZoom: false,
    getImageCaption: function(el) { 
			return el.getAttribute('title'); 
		}
  };

  // Identify all existing galleries identifiers
  var galleries = '';
  $("div[class*=photoswipe-gallery-]").each(function(index) {
    galleries += $(this).attr('class') + ' ';
  });
  var regexp = /photoswipe\-gallery\-(\S*)/g; // regexp to find all the existing galleries identifiers (starting with photoswipe-gallery-)
  galleries = ($.unique(galleries.match(regexp))).sort();

// console.log(galleries);

  // Instanciate all photoswipe galleries
  if (galleries != '') {
    galleries.forEach(function(item) {
    	window.Code.PhotoSwipe.attach( $('.' + item + ' a'), options);
    });
  }
//   else {
//     $(".photoswipe-image a").photoSwipe(options);
//   }
  
};

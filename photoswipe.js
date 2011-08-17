/**
 * Load PhotoSwipe once page is ready
 */
Drupal.behaviors.photoswipe = function(context) {
  var photoswipe = Drupal.settings.photoswipe;

  // Set options
  Code.PhotoSwipe.Current.setOptions({
    imageScaleMethod: "fitNoUpscale",
    allowRotationOnUserZoom: false,
    getImageCaption: function(el) { 
			return el.getAttribute('title'); 
		}
  });

  $(".photoswipe-image a").photoSwipe();
};

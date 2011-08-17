/**
 * Load PhotoSwipe once page is ready
 */

(function(window, PhotoSwipe){		
	document.addEventListener('DOMContentLoaded', function(){
			
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
  
    // Instanciate all photoswipe galleries
    if (galleries != '') {
       galleries.forEach(function(item) {
         PhotoSwipe.attach( window.document.querySelectorAll('.' + item + ' a'), options );
      });
    }

	}, false);

}(window, window.Code.PhotoSwipe));


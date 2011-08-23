Array.prototype.getUnique = function(){
  var u = {}, a = [];
  for (var i = 0, l = this.length; i < l; ++i) {
    if (this[i] in u)
      continue;
    a.push(this[i]);
    u[this[i]] = 1;
  }
  return a;
}
var myArr = ['Kevin', 'Kevin', 'Shamasis', 'Kevin'].getUnique(); // must be called to prevent error!
// console.log(myArr);


/**
 * Load PhotoSwipe once page is ready
 */
(function(window, PhotoSwipe){		
	document.addEventListener('DOMContentLoaded', function(){
    // Set options
    var options = photoswipeConfig;
    
    // Find all existing galleries
    var galleries = null;
    $("div[class*=photoswipe-gallery-]").each(function(index) {
      galleries += $(this).attr('class') + ' ';
    });
    
    // Identify and instanciate all photoswipe galleries
    var regexp = /photoswipe\-gallery\-(\S*)/g; // regexp to find all the existing galleries identifiers (starting with photoswipe-gallery-)
    if (galleries != null) { // else no div found
      galleries = galleries.match(regexp);
      galleries = galleries.sort().getUnique();
      galleries.forEach(function(item) {
        PhotoSwipe.attach( window.document.querySelectorAll('.' + item + ' a'), options );
      });
    }

	}, false);

}(window, window.Code.PhotoSwipe));

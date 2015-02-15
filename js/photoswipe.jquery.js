/**
 * Load PhotoSwipe once page is ready
 */
(function ($) {

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;

      var $clickedGallery = $(this);

      var eTarget = e.target || e.srcElement;
      var $eTarget = $(eTarget);

      // find root element of slide
      var clickedListItem = $eTarget.closest('.photoswipe');

      if(!clickedListItem) {
          return;
      }

      // get the index of the clicked element
      index = clickedListItem.parentsUntil($clickedGallery).index();

      if(index >= 0) {
          // open PhotoSwipe if valid index found
          openPhotoSwipe( index, $clickedGallery );
      }
      return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
      var hash = window.location.hash.substring(1),
      params = {};

      if(hash.length < 5) {
          return params;
      }

      var vars = hash.split('&');
      for (var i = 0; i < vars.length; i++) {
          if(!vars[i]) {
              continue;
          }
          var pair = vars[i].split('=');
          if(pair.length < 2) {
              continue;
          }
          params[pair[0]] = pair[1];
      }

      if(params.gid) {
          params.gid = parseInt(params.gid, 10);
      }

      if(!params.hasOwnProperty('pid')) {
          return params;
      }
      params.pid = parseInt(params.pid, 10);
      return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
      var pswpElement = $('.pswp')[0];
      var items = [];

      var images = galleryElement.find('a.photoswipe');
      images.each(function (index) {
        var $image = $(this);
        size = $image.data('size').split('x');
        items.push(
          {
            src : $image.attr('href'),
            w: size[0],
            h: size[1],
            title : $image.data('overlay-title')
          }
        );
      })

      // define options (if needed)
      options = {
          index: index,
          // define gallery index (for URL)
          galleryUID: galleryElement.data('pswp-uid'),
      };

      if(disableAnimation) {
          options.showAnimationDuration = 0;
      }

      // Pass data to PhotoSwipe and initialize it
      gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
  };


  Drupal.behaviors.photoswipe = {
    attach: function (context, settings) {

      var $galleries = $('.photoswipe-gallery', context);
      if ($galleries.length) {
        // loop through all gallery elements and bind events
        $galleries.each( function (index) {
           var $gallery = $(this);
           $gallery.attr('data-pswp-uid', index+1);
           $gallery.click(onThumbnailsClick);
        });

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if(hashData.pid > 0 && hashData.gid > 0) {
            openPhotoSwipe( hashData.pid - 1 ,  $($galleries[ hashData.gid - 1 ]), true );
        }
      }
    }
  };
})(jQuery);

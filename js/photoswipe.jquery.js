(function ($, Backdrop, PhotoSwipe, PhotoSwipeUI_Default) {
  Backdrop.behaviors.photoswipe = {
    /**
     * PhotoSwipe Options, coming from config settings.
     */
    photoSwipeOptions: {},
    /**
     * Instantiated galleries.
     */
    galleries: [],
    /**
     * Load PhotoSwipe once page is ready
     */
    attach: function (context, settings) {
      this.photoSwipeOptions = settings.photoswipe ? settings.photoswipe.options : {};

      var $galleries = $('.photoswipe-gallery', context);
      var galleryUID = 0;
      if ($galleries.length) {
        // Loop through all gallery elements, bind events and save Photoswipe slides.
        $galleries.each( function () {
          var $gallery = $(this);
          $gallery.attr('data-pswp-uid', galleryUID);
          $gallery.on('click', Backdrop.behaviors.photoswipe.onThumbnailsClick);
          // Create and store list of Photoswipe slides.
          Backdrop.behaviors.photoswipe.pswSlidesFromElements($gallery, galleryUID);
          galleryUID ++;
        });
      }
      var $imagesWithoutGalleries = $('a.photoswipe', context).filter( function(elem) {
        return !$(this).parents('.photoswipe-gallery').length;
      });
      if ($imagesWithoutGalleries.length) {
        // We have no galleries just individual images.
        $imagesWithoutGalleries.each(function () {
          $imageLink = $(this);
          $imageLink.wrap('<span class="photoswipe-gallery"></span>');
          var $gallery = $imageLink.parent();
          $gallery.attr('data-pswp-uid', galleryUID);
          $gallery.on('click', Backdrop.behaviors.photoswipe.onThumbnailsClick);
          // Create and store list of Photoswipe slides.
          Backdrop.behaviors.photoswipe.pswSlidesFromElements($gallery, galleryUID);
          galleryUID ++;
        });
      }

      // Parse URL and open gallery if it contains #&pid=3&gid=1
      var hashData = this.parseHash();
      if (hashData.pid >= 0 && hashData.gid >= 0) {
        this.openPhotoSwipe(hashData.pid, $($galleries[hashData.gid]));
      }
    },

    /**
     * Takes data from jQuery collection containing gallery elements and converts it
     * to Photoswipe slides(items) array. The array is then stored in the galleries list.
     */
    pswSlidesFromElements: function(galleryElement, galleryUID) {
      if (galleryElement.length) {
        var items = [];
        var $items = galleryElement.find('a.photoswipe');
        $items.each(function(index, item) {
          var $item = $(item);
          $item.attr('data-pid', index); // Save index as pid in data attribute for easy access to DOM element.
          var size = $item.data('size') ? $item.data('size').split('x') : ['', ''];
          items.push(
            {
              src: $item.attr('href'),
              w: size[0],
              h: size[1],
              pid: index,  // Save pid for easy slide identification.
              title: $item.data('overlay-title'),
              msrc: $item.find('img').attr('src')
            }
          );
        });
        // Store items array in galleries list for subsequent use.
        Backdrop.behaviors.photoswipe.galleries[galleryUID] = items;
      }
    },

    /**
     * Triggers when user clicks on thumbnail.
     *
     * Code taken from http://photoswipe.com/documentation/getting-started.html
     * and adjusted accordingly.
     */
    onThumbnailsClick: function (e) {
      e = e || window.event;

      var $clickedGallery = $(this);

      var eTarget = e.target || e.srcElement;
      var $eTarget = $(eTarget);

      // Find root element of slide.
      var clickedListItem = $eTarget.closest('.photoswipe');

      if (!clickedListItem) {
        return true;
      }

      // Get the index of the clicked element.
      var index = parseInt(clickedListItem.attr('data-pid'), 10);

      if (index >= 0) {
        // Open PhotoSwipe if a valid index was found.
        Backdrop.behaviors.photoswipe.openPhotoSwipe(index, $clickedGallery);

        // Prevent default:
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
      }
      return true;
    },

    /**
     * Code taken from http://photoswipe.com/documentation/getting-started.html
     * and adjusted accordingly.
     */
    openPhotoSwipe: function (index, galleryElement, options) {
      var pswpElement = $('.pswp')[0];
      options = options || Backdrop.behaviors.photoswipe.photoSwipeOptions;

      // Define options.
      // Define gallery index (for URL).
      options.index = Number(index);
      // Define gallery unique id.
      options.galleryUID = parseInt(galleryElement.data('pswp-uid'), 10);
      // Use slides pids instead of calculated index.
      options.galleryPIDs = true;
      // Get list of Photoswipe slides.
      var items = Backdrop.behaviors.photoswipe.galleries[options.galleryUID];

      // Add zoom animation function.
      options.getThumbBoundsFn = function (index) {
        var pid = items[index].pid;
        var tn = galleryElement.find('.photoswipe[data-pid="' + pid + '"] img');
        if (tn.length == 0) {
          tn = galleryElement.find('.photoswipe:eq(0) img');
        }
        if (tn.length == 0) {
          // Return undefined if still null, see https://www.drupal.org/project/photoswipe/issues/3023442
          return undefined;
        }
        var tw = tn.width();
        var tpos = tn.offset();
        return { x: tpos.left, y: tpos.top, w: tw };
      }

      // Pass data to PhotoSwipe and initialize it.
      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    },

    /**
     * Parse picture index and gallery index from URL (#&pid=1&gid=2)
     *
     * Code taken from http://photoswipe.com/documentation/getting-started.html
     * and adjusted accordingly.
     */
    parseHash: function () {
      var hash = window.location.hash.substring(1),
        params = {};

      if (hash.length < 5) {
        return params;
      }

      var vars = hash.split('&');
      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }
        var pair = vars[i].split('=');
        if (pair.length < 2) {
          continue;
        }
        params[pair[0]] = pair[1];
      }

      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }

      if (!params.hasOwnProperty('pid')) {
        return params;
      }
      params.pid = parseInt(params.pid, 10);

      return params;
    }
  };
})(jQuery, Backdrop, PhotoSwipe, PhotoSwipeUI_Default);

/**
 * Load PhotoSwipe once page is ready
 */
(function ($) {
Drupal.behaviors.photoswipe = {
  attach: function (context, settings) {
    var $galleries = $('.photoswipe-gallery', context);
    if ($galleries.length) {
      $galleries.each(function () {
        $(this).find('a.photoswipe').photoSwipe(settings.photoswipe.options);
      });
    }
    else if ($('a.photoswipe', context).length) {
      // We have no galleries just individual images.
      $('a.photoswipe', context).each(function() {
        $(this).photoSwipe(settings.photoswipe.options);
      });
    }
  }
};
})(jQuery);

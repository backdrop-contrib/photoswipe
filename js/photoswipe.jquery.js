/**
 * Load PhotoSwipe once page is ready
 */
(function ($) {
Drupal.behaviors.photoswipe = {
  attach: function (context, settings) {
    var $galleries = $('.photoswipe-gallery', context);
    if ($galleries.length) {
      $galleries.each(function () {
        $(this).find('a.photoswipe').photoSwipe({});
      });
    }
  }
};
})(jQuery);

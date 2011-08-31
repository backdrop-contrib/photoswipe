DESCRIPTION 
===========

jQuery-based lightbox library offers very nice mobile browsing features (in
particular swiping to the next picture)!


INSTALLATION 
============

1. Download and install the "Libraries API" module: uncompress the "libraries"
folder, copy it to your "modules" directory, and enable it under Administer >>
Site building >> Modules.
http://drupal.org/project/libraries

2. Place the "photoswipe" folder in your "modules" directory (e.g.
sites/all/modules/photoswipe).

3. Install third party PhotoSwipe software
     Download PhotoSwipe 2.0.0 source from PhotoSwipe website 
     (e.g. http://github.com/downloads/codecomputerlove/PhotoSwipe/code.photoswipe-2.0.0.zip)
     Unarchive it into your "libraries" directory (e.g. sites/all/libraries).
     You may need to create the "libraries" directory first.
     Rename it to "photoswipe" (lower case).
NB: Relying on libraries module to locate 'photoswipe' folder allows you to place
it in a site specific (e.g. sites/mysite/libraries) or default folder
(e.g. sites/all/libraries). Site-specific versions are selected preferentially.

4. Enable the PhotoSwipe module under Administer >> Site building >> Modules.


USAGE
=====

In order to use this module, you must install and activate ImageCache and 
ImageField modules.
After adding an image field to any content type (e.g. 'article'), you can select
'PhotoSwipe: Preset1 to Preset2' as a display mode in Administer >> Content
management >> MyContentType in the tab 'Display fields'. All possible
combinations of imagecache presets (as thumbnails and link targets) are proposed.


ADVANCED CONFIGURATION
======================

You can pass a javascript string to override the default option of Photoswipe
(documented in the file README.md of PhotoSwipe).

If you want better desktop browser compatibility, you can choose to load
PhotoSwipe using jQuery.
Warning: Since this module is based on a much newer version of jQuery (even than
the one proposed by jQuery Update), it is likely to create heavy compatibility
problems with other modules and cannot be used in admin or edit pages.
Nonetheless it can be used without Drupal or jQuery errors on standard pages!


AUTHOR 
======

Module written by Thomas Julou. http://drupal.org/user/273952
ImageCache and ImageField integration taken from Shadowbox module (D6 version).

PhotoSwipe http://www.photoswipe.org/


TO DO 
=====

?Does not disable admin by default if standard ps is used?

Drush integration


CHANGE LOG 
==========


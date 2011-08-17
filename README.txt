DESCRIPTION 
===========

jQuery-based lightbox library offers very nice mobile browsing features (in
particular swiping to the next picture)!

The module features imagecache and imagefield integration (from the Shadowbox
module) and is still in early stage of developement.

Warning: Since this module is based on a much newer version of jQuery (even than
the one proposed by jQuery Update), it is likely to create heavy compatibility
problem with other modules and cannot be used in admin or edit pages.
Nonetheless it can be used without Drupal or jQuery errors on standard pages!


INSTALLATION 
============

1. Download and install the "Libraries API" module: uncompress the "libraries"
folder, copy it to your "modules" directory, and enable it under Administer >>
Site building >> Modules.
http://drupal.org/project/libraries

2. Place the "photoswipe" folder in your "modules" directory (e.g.
sites/all/modules/photoswipe).

3. Install third party PhotoSwipe software
     Download PhotoSwipe 1.0.19 source from PhotoSwipe website 
     (e.g. http://github.com/downloads/codecomputerlove/PhotoSwipe/code-photoswipe.v1.0.19.zip)
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
After adding an imagefield to any content type (e.g. 'album'), you can select
'PhotoSwipe: Preset1 to Preset2' as a display mode in Administer >> Content
management >> MyContentType in the tab 'Display fields'. All possible
combinations of imagecache presets (as thumbnails and link targets) are proposed.


AUTHOR 
======

Module written by Thomas Julou. http://drupal.org/user/273952
ImageCache and ImageField integration taken from Shadowbox module.

PhotoSwipe http://www.photoswipe.org/


TO DO 
=====

Update to photoswipe 2.0 (when stable)
Add support for several galleries per page (with 2.0)

Drush integration

Port to 7.x


CHANGE LOG 
========== 

6.x-1.0-beta2: Support of MathJax 1.1. MathJax source is
loaded from MathJax CDN by default. 6.x-1.0-beta1: First release.

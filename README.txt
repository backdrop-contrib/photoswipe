DESCRIPTION
===========

jQuery-based lightbox library offers very nice mobile browsing features (in
particular swiping to the next picture)!


INSTALLATION
============

1. Download and install the "Libraries API" module: uncompress the "libraries"
folder, copy it to your "modules" directory, and enable it.
http://drupal.org/project/libraries

2. Place the "photoswipe" folder in your "modules" directory (e.g.
sites/all/modules/photoswipe).

3. Install third party PhotoSwipe software
     Download PhotoSwipe 4.x source from PhotoSwipe website
     (e.g. https://github.com/dimsemenov/PhotoSwipe/archive/v4.0.5.zip)
     Unarchive it into your "libraries" directory (e.g. sites/all/libraries).
     You may need to create the "libraries" directory first.
     Rename it to "photoswipe" (lower case).
NB: Relying on libraries module to locate 'photoswipe' folder allows you to place
it in a site specific (e.g. sites/mysite/libraries) or default folder
(e.g. sites/all/libraries). Site-specific versions are selected preferentially.

4. Enable the PhotoSwipe module.


USAGE
=====

After adding an image field to any content type (e.g. 'article'), you can select
'PhotoSwipe: Preset1 to Preset2' as a display mode in Structure >> Content types
>> MyContentType in the tab 'Manage display'. All possible
combinations of image styles are proposed.

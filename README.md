# Photoswipe

Photoswipe provides a jQuery-based photo gallery offering good mobile browsing features, in
particular swiping to the next picture.

It is a port to Backdrop of the Drupal module, v7.x-2.0 beta 4 (Dec 2018).

## Dependencies

It depends on the third party PhotoSwipe library described at https://photoswipe.com.
This library is now included in this module.


## Installation

Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules.


## Usage

### Multiple images in nodes
Within 'Manage Displays' for a content type that includes images, select 'Photoswipe' 
for the format of an image field. Then choose the settings for the node images and the
photoswipe images. Multiple images will then be displayed as a gallery.

### Single image in node
Photoswipe can be used similarly for fields for single images within a content type.
In such cases Photoswipe provides a 'lightbox' type of display of the image but not,
of course, a gallery.

### Multiple images in Views
Choose the option 'Photoswipe' as the 'Formatter' for the image field.
Choose a predefined style for your node images (i.e. thumbnails).
Also choose a larger style or the original image for your Photoswipe image.

Within 'Multiple Field Settings' un-check the item 'Display all values in the same row.'
Within 'Other' settings for your view, set the CSS class 'photoswipe-gallery'.
Within 'Format' settings, un-check the row settings.

### Image captions
Photoswipe includes an option to use the alt or title values of an image as a caption. 
Activate this by first enabling the alt or title options within the image field settings 
for the relevant content type. Then in the display options for the image field select 
the required option for the 'Photoswipe image caption' setting.

It is also possible to add a text field to the node type and set Photoswipe to use 
this as a caption, though this is a per-node value and is not perhaps suitable
when using multiple images in a node.

## License

This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.
    
## About the underlying Photoswipe script
The script was created by Code Computerlove, a digital agency in Manchester. 
In March 2014, it passed on development to Dmitry Semenov. Read more at
https://photoswipe.com.

The script is free to use for personal and commercial projects. 
It falls under the MIT license.


## Credits        
### Porting to Backdrop

Graham Oliver (github.com/Graham-72/) with the assistance of the Coder Upgrade module.

### Maintainers for Drupal:

- Julian Pustkuchen (Anybody)
- Paris Liakos (ParisLiakos)


### Acknowledgement

This port to Backdrop would not, of course, be possible without all
the work done by the developers and maintainers of the Drupal module,
and the provider (Dmitry Semenov) of the PhotoSwipe library.


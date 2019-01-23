# Photoswipe

Photoswipe provides a jQuery-based photo gallery offering good mobile browsing features, in
particular swiping to the next picture.

It is a port to Backdrop of the Drupal module, v7.x-2.0 beta 4 (Dec 2018).

## Dependencies

It depends on the third party PhotoSwipe library described at https://photoswipe.com.

It also currently depends on the Backdrop 'Libraries' contributed module


## Installation

1. Download, install and enable the "Libraries API" module.

2. Download, install and enable this Photoswipe module.

3. Install third party PhotoSwipe software as follows:
     Create a libraries directory for your site if one does not yet exist.
     Create a new folder 'photoswipe' within this libraries directory.
     Download the PhotoSwipe 4.x source from PhotoSwipe website
     (e.g. https://github.com/dimsemenov/PhotoSwipe/archive/v4.0.5.zip)
     Unarchive it and place the 'dist' folder into this "libraries/photoswipe" folder. 

4. The site status report should now show that this library is installed


## Usage

### Multiple images in Views
The option 'Photoswipe' will now appear as a Formatter for an image field.
Choose a predefined style for your node images (i.e. thumbnails).
Also choose a larger style or the original image for your Photoswipe image.
Within 'Multiple Field Settings' check the item 'Display all values in the same row.'
Within 'Style Settings' for your image field, customise the field and label wrapper 
with a custom CSS class 'photoswipe-gallery'.

### Multiple images in nodes
Within 'Manage Displays' for a content type that includes images, select 'Photoswipe' 
for the format of an image field. Then choose the settings for the node images and the
photoswipe images. Multiple images will then be displayed as a gallery.

### Single image in node
Photoswipe can be used similarly for fields for single images within a content type.
In such cases Photoswipe provides a 'lightbox' type of display of the image but not,
of course, a gallery.

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


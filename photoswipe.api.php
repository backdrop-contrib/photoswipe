<?php

/**
 * @file
 * Hooks provided by the Photoswipe module.
 */

 /**
  * Provides the ability to override Photoswipe default settings.
  *
  * @param $settings
  *  Default Photoswipe settings.
  */
 function hook_photoswipe_default_settings_alter(&$settings) {
  // Disable sharing links.
  $settings['shareEl'] = FALSE;
 }

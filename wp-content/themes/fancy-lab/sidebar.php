<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Fancy Lab
 */
?>
<?php if(is_active_sidebar('fancy-lab-sidebar-1')): ?>
	<aside class="col-lg-3 col-md-4 col-12 h-100">
	   <?php dynamic_sidebar('fancy-lab-sidebar-1'); ?>
	</aside>	
<?php endif;
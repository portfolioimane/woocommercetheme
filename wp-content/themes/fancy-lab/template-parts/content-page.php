<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Fancy Lab
 */
?>
<article class="col">
					    	       		<h1><?php the_title();?></h1>
					    	       		<div><?php the_content();?></div>
					    	       			<?php 
						if(comments_open() || get_comments_number()):
							comments_template();
						endif;
						?>
					    	       	</article>
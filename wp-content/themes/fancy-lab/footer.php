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

<footer>
			<div class="footer-widgets">
				<div class="container">
					<div class="row">
						<?php if(is_active_sidebar('fancy-lab-sidebar-footer1')): ?>
						<div class="col-md-4 col-12">
						<?php dynamic_sidebar('fancy-lab-sidebar-footer1'); ?>
					    </div>
					<?php endif; ?>
						<?php if(is_active_sidebar('fancy-lab-sidebar-footer2')): ?>
						<div class="col-md-4 col-12">
						<?php dynamic_sidebar('fancy-lab-sidebar-footer2'); ?>
					    </div>
					<?php endif; ?>
                    	<?php if(is_active_sidebar('fancy-lab-sidebar-footer3')): ?>
						<div class="col-md-4 col-12">
						<?php dynamic_sidebar('fancy-lab-sidebar-footer3'); ?>
					    </div>
					<?php endif; ?>
					</div>
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="copyright-text col-12 col-md-6">
							<p><?php echo get_theme_mod('set_copyright',__('Copyright X - All Rights Reserved', 'fancy-lab')); ?></p>
						</div>
						<nav class="footer-menu col-12 col-m-6 text-left text-md-right">
							<?php
			 		      	    wp_nav_menu(
			 		      	      array(
                                       'theme_location' => 'fancy_lab_footer_menu'
			 		      	      )
			 		      	    );
			 		      	 ?>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	</div>
	<?php wp_footer(); ?>
</body>
</html>
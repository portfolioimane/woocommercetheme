<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'woocommercetheme' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`wWFGhLHQS.Xe+rb.m!V$f<<_cV6|EmE8IXVAU( OyiBA^F+bxg8*+cA%IjIpf#}' );
define( 'SECURE_AUTH_KEY',  'Tf0Xl7bZXrdG;=l%j5X<=X!|/`-?,t:= d/C28rZzB{OOEtiE|@oV3&b#P.]j*r=' );
define( 'LOGGED_IN_KEY',    '6?I]HJO$!z(nXOe4rmE_F]]l-ejl#ox~rJi(h58-4b3Y3(6%}&mV[GBR<f8jVcos' );
define( 'NONCE_KEY',        'cyl45+OVehotQEx`xPZtGDPhkR=Iuhn&&lfG^}p$[Ai48t=#/q}2]>{~#_o:T/=f' );
define( 'AUTH_SALT',        'V?d,W~uKUH+PWj{Gk1h2`4; y:9P,yw>pcEJ8tfzKRB*DZ6/(gH7}U6(EGN(NIaz' );
define( 'SECURE_AUTH_SALT', 'gnqE5W5!X$YRUk.;[#HSHMs2H@a&7T7?.`w*x(w)2vn=,aH,NT013>d{jPXKz*{G' );
define( 'LOGGED_IN_SALT',   '^(9k})q}{]uTUV/hX&[VU$00|B)|tfdb_]-.Y38t/;EnIQSB4M^b`;R(BJg}@J<D' );
define( 'NONCE_SALT',       '^3oYGkRW.#k7<:h!Ld1D9dE5h)GCb2hOk! |pLN.cFY6jACX1`n0()Y-N&=HEWCq' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

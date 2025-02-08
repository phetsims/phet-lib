// Copyright 2022-2025, University of Colorado Boulder

/**
 * Used by the manually-built phet-lib package.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

// NOTE: Not including mobius, since it requires THREE.js

import '../../alpenglow/js/main.js';
import '../../axon/js/main.js';
import '../../bamboo/js/main.js';
import '../../dot/js/main.js';
import '../../griddle/js/main.js';
import '../../joist/js/main.js';
import '../../kite/js/main.js';
import '../../mobius/js/main.js';
import '../../nitroglycerin/js/main.js';
import '../../phet-core/js/main.js';
import '../../phetcommon/js/main.js';
import '../../scenery-phet/js/main.js';
import '../../scenery/js/main.js';
import '../../sun/js/main.js';
import '../../tambo/js/main.js';
import '../../tandem/js/main.js';
import '../../tappi/js/main.js';
import '../../twixt/js/main.js';
import '../../utterance-queue/js/main.js';
import '../../vegas/js/main.js';

if ( !self.hasOwnProperty( '_' ) ) {
  throw new Error( 'Underscore/Lodash not found: _' );
}
if ( !self.hasOwnProperty( '$' ) ) {
  throw new Error( 'jQuery not found: $' );
}

phet.scenery.Utils.polyfillRequestAnimationFrame();

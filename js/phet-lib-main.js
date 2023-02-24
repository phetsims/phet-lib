// Copyright 2022-2023, University of Colorado Boulder

// NOTE: Not including mobius, since it requires THREE.js

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
import '../../scenery/js/imports.js';
import '../../sun/js/main.js';
import '../../tambo/js/main.js';
import '../../tandem/js/main.js';
import '../../tappi/js/main.js';
import '../../twixt/js/main.js';
import '../../utterance-queue/js/main.js';
import '../../vegas/js/main.js';

if ( !window.hasOwnProperty( '_' ) ) {
  throw new Error( 'Underscore/Lodash not found: _' );
}
if ( !window.hasOwnProperty( '$' ) ) {
  throw new Error( 'jQuery not found: $' );
}

phet.scenery.Utils.polyfillRequestAnimationFrame();

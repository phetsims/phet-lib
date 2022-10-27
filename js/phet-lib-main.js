// Copyright 2022, University of Colorado Boulder

/* eslint-disable default-import-match-filename,bad-sim-text */

// NOTE: Not including mobius, since it requires THREE.js

import axon from '../../axon/js/main.js';
import bamboo from '../../bamboo/js/main.js';
import dot from '../../dot/js/main.js';
import griddle from '../../griddle/js/main.js';
import joist from '../../joist/js/main.js';
import kite from '../../kite/js/main.js';
import mobius from '../../mobius/js/main.js';
import nitroglycerin from '../../nitroglycerin/js/main.js';
import phetCore from '../../phet-core/js/main.js';
import phetcommon from '../../phetcommon/js/main.js';
import sceneryPhet from '../../scenery-phet/js/main.js';
import { scenery } from '../../scenery/js/imports.js';
import sun from '../../sun/js/main.js';
import tambo from '../../tambo/js/main.js';
import tandem from '../../tandem/js/main.js';
import tappi from '../../tappi/js/main.js';
import twixt from '../../twixt/js/main.js';
import utteranceQueue from '../../utterance-queue/js/main.js';
import vegas from '../../vegas/js/main.js';

if ( !window.hasOwnProperty( '_' ) ) {
  throw new Error( 'Underscore/Lodash not found: _' );
}
if ( !window.hasOwnProperty( '$' ) ) {
  throw new Error( 'jQuery not found: $' );
}

window.axon = axon;
window.bamboo = bamboo;
window.dot = dot;
window.griddle = griddle;
window.joist = joist;
window.kite = kite;
window.mobius = mobius;
window.nitroglycerin = nitroglycerin;
window.phetCore = phetCore;
window.phetcommon = phetcommon;
window.scenery = scenery;
window.sceneryPhet = sceneryPhet;
window.sun = sun;
window.tambo = tambo;
window.tandem = tandem;
window.tappi = tappi;
window.twixt = twixt;
window.utteranceQueue = utteranceQueue;
window.vegas = vegas;
window.scenery.Utils.polyfillRequestAnimationFrame();

// Copyright 2016-2022, University of Colorado Boulder

/* eslint-disable default-import-match-filename,bad-sim-text */

import axon from '../../axon/js/main.js';
import dot from '../../dot/js/main.js';
import kite from '../../kite/js/main.js';
import phetCore from '../../phet-core/js/main.js';
import utteranceQueue from '../../utterance-queue/js/main.js';
import { scenery } from '../../scenery/js/imports.js';
import sun from '../../sun/js/main.js';
import sceneryPhet from '../../scenery-phet/js/main.js';
import phetLib from './main.js'; // eslint-disable-line no-unused-vars

if ( !window.hasOwnProperty( '_' ) ) {
  throw new Error( 'Underscore/Lodash not found: _' );
}
if ( !window.hasOwnProperty( '$' ) ) {
  throw new Error( 'jQuery not found: $' );
}

window.axon = axon;
window.dot = dot;
window.kite = kite;
window.phetCore = phetCore;
window.utteranceQueue = utteranceQueue;
window.scenery = scenery;
window.sun = sun;
window.sceneryPhet = sceneryPhet;
window.scenery.Utils.polyfillRequestAnimationFrame();

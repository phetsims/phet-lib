// Copyright 2024, University of Colorado Boulder

/**
 * Copies the PhET sources into place under src/, so that it can make a functional NPM package.
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 *
 * Run as the following at the root of phet-lib:
 *
 * `node js/build.js`
 */

/* eslint-disable */

import fs from 'fs';
import path from 'path';
import { default as webpackGlobalLibraries } from '../../chipper/js/common/webpackGlobalLibraries.js';
import _ from 'lodash';

const wipeDir = ( dirname ) => {
  if ( fs.existsSync( `./${dirname}` ) ) {
    fs.rmSync( `./${dirname}`, {
      recursive: true
    } );
  }

  fs.mkdirSync( `./${dirname}` );
};

wipeDir( 'src' );
wipeDir( 'third-party-licenses' );

const repos = [
  'alpenglow',
  'assert',
  'axon',
  'bamboo',
  'chipper',
  'dot',
  'griddle',
  'joist',
  'kite',
  'mobius',
  'nitroglycerin',
  'phet-core',
  'phetcommon',
  'query-string-machine',
  'scenery-phet',
  'scenery',
  'sherpa',
  'sun',
  'tambo',
  'tandem',
  'tappi',
  'twixt',
  'utterance-queue',
  'vegas'
];

const badDirectoryNames = [
  'build',
  'dist',
  'node_modules'
];

const suffixes = [
  '.js',
  '.ts',
  '.mjs'
];

const buildJSON = JSON.parse( fs.readFileSync( '../chipper/build.json', 'utf8' ) );
const licenseJSON = JSON.parse( fs.readFileSync( '../sherpa/lib/license.json', 'utf8' ) );

const requiredLibs = _.uniq( [
  ...Object.values( webpackGlobalLibraries ),
  ...buildJSON.common.preload,
  'sherpa/lib/big-6.2.1.mjs', // hah, dot Utils...
  'sherpa/lib/font-awesome-4.5.0' // manual inclusion of fontawesome-4 license
].filter( str => str.includes( 'sherpa' ) ).map( str => path.basename ( str ) ) );

const licensePaths = [];

// TODO: how do we ... remove assertions and such? maybe we build a separate dev package?
repos.forEach( repo => {
  fs.cpSync( `../${repo}`, `./src/${repo}`, {
    filter: ( src, dest ) => {
      const stats = fs.statSync( src );
      const name = path.basename( src );

      // We have to handle LICENSE setup somewhat differently here!
      if ( repo === 'sherpa' ) {
        if ( stats.isDirectory() ) {
          if ( !name.includes( 'sherpa' ) && name !== 'lib' && name !== 'licenses' && name !== 'js' && name !== 'fontawesome-4' && name !== 'brands' ) {
            return false;
          }
        }
        else {
          if ( src.includes( 'lib/' ) ) {
            if ( !requiredLibs.includes( name ) ) {
              return false;
            }

            console.log( `including ${name}` );
          }

          if ( src.includes( 'licenses/' ) ) {
            if ( requiredLibs.includes( name.slice( 0, -( '.txt'.length ) ) ) ) {
              licensePaths.push( src );
              return true;
            }
          }
        }
      }

      if ( stats.isDirectory() ) {
        return !name.includes( '.' ) && !badDirectoryNames.includes( name );
      }
      else {
        for ( const suffix of suffixes ) {
          if ( name.endsWith( suffix ) ) {
            return true;
          }
        }
        return false;
      }
    },
    recursive: true
  } );
} );

licensePaths.forEach( src => {
  const dest = `./third-party-licenses/${path.basename( src )}`;
  fs.cpSync( src, dest );
} );
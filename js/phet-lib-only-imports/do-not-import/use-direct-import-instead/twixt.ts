// Copyright 2024, University of Colorado Boulder

/**
 * "Barrel" file for twixt, so that we can export all of the API of the repo.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

export { default as Animation } from '../../../../src/twixt/js/Animation.js';
export type { AnimationOptions } from '../../../../src/twixt/js/Animation.js';
export { default as DampedAnimation } from '../../../../src/twixt/js/DampedAnimation.js';
export type { DampedAnimationOptions } from '../../../../src/twixt/js/DampedAnimation.js';
export { default as Easing } from '../../../../src/twixt/js/Easing.js';
export { default as Transition } from '../../../../src/twixt/js/Transition.js';
export type { PartialTransitionOptions, SlideTransitionOptions, WipeTransitionOptions, DissolveTransitionOptions, TransitionOptions } from '../../../../src/twixt/js/Transition.js';
export { default as TransitionNode } from '../../../../src/twixt/js/TransitionNode.js';
export type { TransitionNodeOptions } from '../../../../src/twixt/js/TransitionNode.js';
export { default as twixt } from '../../../../src/twixt/js/twixt.js';

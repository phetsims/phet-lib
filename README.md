phet-lib
=======

Contains built versions of PhET common code libraries.

### Building the standalone phet-lib.js

`grunt`

This will place the built files in the build/ directory. Copy them over to the dist/ directory if you want to publish them.

### Building the phet-lib NPM package

`node js/build.js`

Then test using local references, e.g. instead of "phet-lib": "~0.08", use "phet-lib": "file:../phet-lib".

Then for publishing:

- `npm pack --dry-run` (to see what files will be included)
- `npm version patch` (or minor/major)
- `npm publish` (once ready)

### License

See the [license](LICENSE)
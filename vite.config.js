import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// Using js/ts compatibility from https://github.com/vitejs/vite/issues/3040

// https://vitejs.dev/config/
export default defineConfig( {
  base: '',
  resolve: {
    alias: [
      {
        find: /^(.*)\.js$/,
        replacement: '$1'
      }
    ]
  },
  build: {
    lib: {
      entry: resolve( __dirname, 'js/index.ts' ),
      name: 'phet-lib',
      fileName: 'phet-lib'
    }
  },
  plugins: [ dts() ]
} );

/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'css-modules-theme',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },

    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@centrodphlibs/theme',
      ],
      output: {
        /**
         * Configure asset file names to ensure CSS is output to the correct location.
         * Since cssCodeSplit is false, all CSS will be bundled into a single file.
         * We need to output it to lib/theme.css to match the package.json export path.
         */
        assetFileNames: (assetInfo) => {
          // All CSS files (with cssCodeSplit: false, there should only be one)
          // should be output to lib/theme.css as expected by package.json exports
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'lib/theme.css';
          }
          // For other assets (images, fonts, etc.), preserve their original names
          return assetInfo.name || 'asset';
        },
      },
    },
    cssCodeSplit: false, // Bundle all CSS into a single file
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/css-modules-theme',
      provider: 'v8',
    },
  },
});

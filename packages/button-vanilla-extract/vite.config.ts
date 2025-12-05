/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import * as path from 'path';
import * as fs from 'fs';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

/**
 * Reads TypeScript paths from tsconfig.base.json and converts them to Vite resolve aliases
 * This is needed for vanilla-extract plugin's vite-node runner which doesn't automatically
 * use Vite's resolve configuration
 */
function getViteResolveAliases() {
  const tsconfigPath = path.resolve(__dirname, '../../tsconfig.base.json');
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
  const paths = tsconfig.compilerOptions?.paths || {};
  const baseUrl = tsconfig.compilerOptions?.baseUrl || '.';
  const basePath = path.resolve(__dirname, '../../', baseUrl);

  // Convert TypeScript paths to Vite resolve aliases
  const alias: Record<string, string> = {};
  for (const [key, value] of Object.entries(paths)) {
    // TypeScript paths can have multiple values, take the first one
    const tsPath = Array.isArray(value) ? value[0] : value;
    // Remove the /* suffix if present for the alias key
    const aliasKey = key.replace(/\/\*$/, '');
    // Resolve the path relative to baseUrl
    const resolvedPath = path.resolve(basePath, tsPath);
    alias[aliasKey] = resolvedPath;
  }

  return alias;
}

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/button-vanilla-extract',

  resolve: {
    alias: getViteResolveAliases(),
  },

  plugins: [
    react(),
    vanillaExtractPlugin(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/packages/button-vanilla-extract',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'button-vanilla-extract',
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
        '@vanilla-extract/css',
        '@centrodphlibs/vanilla-extract-theme',
      ],
      output: {
        // Ensure CSS is extracted and included
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'style.css';
          }
          return assetInfo.name || 'asset';
        },
      },
    },
    cssCodeSplit: false, // Bundle all CSS into a single file
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/button-vanilla-extract',
      provider: 'v8',
    },
  },
});


/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import linaria from '@linaria/vite';
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
  cacheDir: '../../node_modules/.vite/packages/app',

  resolve: {
    alias: getViteResolveAliases(),
  },

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    vanillaExtractPlugin(),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
    nxViteTsPaths(),
  ],

  build: {
    outDir: '../../dist/packages/app',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
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
      reportsDirectory: '../../coverage/packages/app',
      provider: 'v8',
    },
  },
});


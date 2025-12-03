/**
 * Vite plugin to automatically inject CSS into the JavaScript bundle
 * This allows consumers to use the component without manually importing CSS
 */
import type { Plugin } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Creates a Vite plugin that injects CSS into the JavaScript bundle
 * @param packageName - Name of the package (e.g., 'autocomplete')
 * @param outDir - Output directory for the build
 * @returns Vite plugin instance
 */
export function cssInjectPlugin(packageName: string, outDir: string): Plugin {
  let cssContent: string | null = null;
  const styleId = `@centrodphlibs/${packageName}-styles`;

  return {
    name: `css-inject-${packageName}`,
    enforce: 'post',

    /**
     * Generate bundle hook - captures the CSS file content
     */
    generateBundle(options, bundle) {
      // Find the CSS file in the bundle
      const cssFileName = 'style.css';
      const cssAsset = Object.values(bundle).find(
        (file) => file.type === 'asset' && file.fileName === cssFileName
      );

      if (cssAsset && cssAsset.type === 'asset') {
        cssContent = cssAsset.source as string;
        // Remove CSS file from bundle - we'll inject it into JS instead
        delete bundle[cssFileName];
      }
    },

    /**
     * Close bundle hook - injects CSS into JS files after they're written and removes CSS file
     */
    closeBundle() {
      if (!cssContent) return;

      const jsFiles = ['index.js', 'index.mjs'];
      const cssFileName = 'style.css';
      const fullOutDir = path.resolve(outDir);

      // Remove CSS file if it exists
      const cssFilePath = path.join(fullOutDir, cssFileName);
      if (fs.existsSync(cssFilePath)) {
        fs.unlinkSync(cssFilePath);
      }

      // Inject CSS into JavaScript files
      for (const fileName of jsFiles) {
        const filePath = path.join(fullOutDir, fileName);
        
        if (!fs.existsSync(filePath)) continue;

        // Read the existing JavaScript file
        const jsContent = fs.readFileSync(filePath, 'utf-8');

        // Escape the CSS content for JavaScript string
        const escapedCss = cssContent
          .replace(/\\/g, '\\\\')
          .replace(/`/g, '\\`')
          .replace(/\${/g, '\\${')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/'/g, "\\'")
          .replace(/"/g, '\\"');

        // Code to inject CSS into the DOM
        const injectionCode = `// Auto-inject CSS styles\n(function() {\n  if (typeof document === 'undefined') return;\n  const styleId = '${styleId}';\n  if (document.getElementById(styleId)) return;\n  const style = document.createElement('style');\n  style.id = styleId;\n  style.textContent = \`${escapedCss}\`;\n  document.head.appendChild(style);\n})();\n\n`;

        // Prepend the injection code to the file
        const updatedContent = injectionCode + jsContent;
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
      }
    },
  };
}


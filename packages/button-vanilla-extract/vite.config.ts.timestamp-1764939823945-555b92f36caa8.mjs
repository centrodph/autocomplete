// vite.config.ts
import { defineConfig } from "file:///Users/yuri.scarbaci/Desktop/personal-github/styled-components-migration/node_modules/.pnpm/vite@5.0.13_@types+node@18.16.9/node_modules/vite/dist/node/index.js";
import react from "file:///Users/yuri.scarbaci/Desktop/personal-github/styled-components-migration/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.0.13_@types+node@18.16.9_/node_modules/@vitejs/plugin-react/dist/index.js";
import dts from "file:///Users/yuri.scarbaci/Desktop/personal-github/styled-components-migration/node_modules/.pnpm/vite-plugin-dts@3.8.3_@types+node@18.16.9_rollup@4.53.3_typescript@5.4.5_vite@5.0.13_@types+node@18.16.9_/node_modules/vite-plugin-dts/dist/index.mjs";
import { vanillaExtractPlugin } from "file:///Users/yuri.scarbaci/Desktop/personal-github/styled-components-migration/node_modules/.pnpm/@vanilla-extract+vite-plugin@5.1.3_@types+node@18.16.9_vite@5.0.13_@types+node@18.16.9_/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import * as path from "path";
import { nxViteTsPaths } from "file:///Users/yuri.scarbaci/Desktop/personal-github/styled-components-migration/node_modules/.pnpm/@nx+vite@18.3.3_@babel+traverse@7.28.5_@swc-node+register@1.8.0_@swc+core@1.3.107_@swc+_9db7e7194e99f41993552d29839c622e/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
var __vite_injected_original_dirname = "/Users/yuri.scarbaci/Desktop/personal-github/styled-components-migration/packages/button-vanilla-extract";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  plugins: [
    react(),
    vanillaExtractPlugin(),
    nxViteTsPaths(),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__vite_injected_original_dirname, "tsconfig.lib.json")
    })
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "./dist",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "button-vanilla-extract",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@vanilla-extract/css"
      ],
      output: {
        // Ensure CSS is extracted and included
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "style.css";
          }
          return assetInfo.name || "asset";
        }
      }
    },
    cssCodeSplit: false
    // Bundle all CSS into a single file
  },
  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest"
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/packages/button-vanilla-extract",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveXVyaS5zY2FyYmFjaS9EZXNrdG9wL3BlcnNvbmFsLWdpdGh1Yi9zdHlsZWQtY29tcG9uZW50cy1taWdyYXRpb24vcGFja2FnZXMvYnV0dG9uLXZhbmlsbGEtZXh0cmFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3l1cmkuc2NhcmJhY2kvRGVza3RvcC9wZXJzb25hbC1naXRodWIvc3R5bGVkLWNvbXBvbmVudHMtbWlncmF0aW9uL3BhY2thZ2VzL2J1dHRvbi12YW5pbGxhLWV4dHJhY3Qvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3l1cmkuc2NhcmJhY2kvRGVza3RvcC9wZXJzb25hbC1naXRodWIvc3R5bGVkLWNvbXBvbmVudHMtbWlncmF0aW9uL3BhY2thZ2VzL2J1dHRvbi12YW5pbGxhLWV4dHJhY3Qvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz0ndml0ZXN0JyAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHsgdmFuaWxsYUV4dHJhY3RQbHVnaW4gfSBmcm9tICdAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBueFZpdGVUc1BhdGhzIH0gZnJvbSAnQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW4nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiBfX2Rpcm5hbWUsXG5cbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdmFuaWxsYUV4dHJhY3RQbHVnaW4oKSxcbiAgICBueFZpdGVUc1BhdGhzKCksXG4gICAgZHRzKHtcbiAgICAgIGVudHJ5Um9vdDogJ3NyYycsXG4gICAgICB0c2NvbmZpZ1BhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICd0c2NvbmZpZy5saWIuanNvbicpLFxuICAgIH0pLFxuICBdLFxuXG4gIC8vIENvbmZpZ3VyYXRpb24gZm9yIGJ1aWxkaW5nIHlvdXIgbGlicmFyeS5cbiAgLy8gU2VlOiBodHRwczovL3ZpdGVqcy5kZXYvZ3VpZGUvYnVpbGQuaHRtbCNsaWJyYXJ5LW1vZGVcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuL2Rpc3QnLFxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWUsXG4gICAgfSxcbiAgICBsaWI6IHtcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50cy5cbiAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcbiAgICAgIG5hbWU6ICdidXR0b24tdmFuaWxsYS1leHRyYWN0JyxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgICAgLy8gQ2hhbmdlIHRoaXMgdG8gdGhlIGZvcm1hdHMgeW91IHdhbnQgdG8gc3VwcG9ydC5cbiAgICAgIC8vIERvbid0IGZvcmdldCB0byB1cGRhdGUgeW91ciBwYWNrYWdlLmpzb24gYXMgd2VsbC5cbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBFeHRlcm5hbCBwYWNrYWdlcyB0aGF0IHNob3VsZCBub3QgYmUgYnVuZGxlZCBpbnRvIHlvdXIgbGlicmFyeS5cbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICdyZWFjdCcsXG4gICAgICAgICdyZWFjdC1kb20nLFxuICAgICAgICAncmVhY3QvanN4LXJ1bnRpbWUnLFxuICAgICAgICAnQHZhbmlsbGEtZXh0cmFjdC9jc3MnXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIEVuc3VyZSBDU1MgaXMgZXh0cmFjdGVkIGFuZCBpbmNsdWRlZFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gJ3N0eWxlLmNzcycpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3R5bGUuY3NzJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIHx8ICdhc3NldCc7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSwgLy8gQnVuZGxlIGFsbCBDU1MgaW50byBhIHNpbmdsZSBmaWxlXG4gIH0sXG5cbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgY2FjaGU6IHtcbiAgICAgIGRpcjogJy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZXN0JyxcbiAgICB9LFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIGluY2x1ZGU6IFsnc3JjLyoqLyoue3Rlc3Qsc3BlY30ue2pzLG1qcyxjanMsdHMsbXRzLGN0cyxqc3gsdHN4fSddLFxuXG4gICAgcmVwb3J0ZXJzOiBbJ2RlZmF1bHQnXSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcmVwb3J0c0RpcmVjdG9yeTogJy4uLy4uL2NvdmVyYWdlL3BhY2thZ2VzL2J1dHRvbi12YW5pbGxhLWV4dHJhY3QnLFxuICAgICAgcHJvdmlkZXI6ICd2OCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixTQUFTLDRCQUE0QjtBQUNyQyxZQUFZLFVBQVU7QUFDdEIsU0FBUyxxQkFBcUI7QUFOOUIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04scUJBQXFCO0FBQUEsSUFDckIsY0FBYztBQUFBLElBQ2QsSUFBSTtBQUFBLE1BQ0YsV0FBVztBQUFBLE1BQ1gsY0FBbUIsVUFBSyxrQ0FBVyxtQkFBbUI7QUFBQSxJQUN4RCxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQSxFQUlBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLE1BQ2YseUJBQXlCO0FBQUEsSUFDM0I7QUFBQSxJQUNBLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUE7QUFBQSxNQUdWLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQTtBQUFBLFFBRU4sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUyxhQUFhO0FBQ2xDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLFVBQVUsUUFBUTtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQTtBQUFBLEVBQ2hCO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsU0FBUyxDQUFDLHNEQUFzRDtBQUFBLElBRWhFLFdBQVcsQ0FBQyxTQUFTO0FBQUEsSUFDckIsVUFBVTtBQUFBLE1BQ1Isa0JBQWtCO0FBQUEsTUFDbEIsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

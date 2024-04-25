import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run centrodphlibs:serve',
        production: 'nx run centrodphlibs:preview',
      },
      ciWebServerCommand: 'nx run centrodphlibs:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

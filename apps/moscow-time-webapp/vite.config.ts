/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/moscow-time-webapp',
  server: {
    port: 4202,
    host: 'localhost',
  },
  preview: {
    port: 4302,
    host: 'localhost',
  },
  plugins: [
    vue(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'moscowTimeWebapp',
      filename: 'remoteEntry.js',
      exposes: {
        './MoscowTime': './src/app/components/MoscowTime.vue'
      },
      shared: ['vue', 'dayjs']
    })
  ],
  build: {
    target: 'esnext',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});

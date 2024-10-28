/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: './',
  root: __dirname,
  cacheDir: '../../node_modules/.vite/tokyo-time-webapp',
  server: {
    port: 4201,
    host: 'localhost',
  },
  preview: {
    port: 4301,
    host: 'localhost',
  },
  plugins: [
    vue(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'tokyoTimeWebapp',
      filename: 'remoteEntry.js',
      exposes: {
        './TokyoTime': './src/app/components/TokyoTime.vue'
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
  }
});

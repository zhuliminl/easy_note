import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
// import { crx } from "@crxjs/vite-plugin";
// import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    // Build Chrome Extension
    // crx({ manifest }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      // '~': path.join(__dirname, 'src/'),
    },
  },
});

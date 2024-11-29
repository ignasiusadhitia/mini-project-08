import path from 'path';

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@hooks': path.resolve('src/hooks'),
      '@pages': path.resolve('src/pages'),
      '@store': path.resolve('src/redux'),
      '@services': path.resolve('src/services'),
      '@utils': path.resolve('src/utils'),
    },
  },
});

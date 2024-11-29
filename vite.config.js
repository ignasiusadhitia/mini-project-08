import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
      '@pages': path.resolve('src/pages'),
      '@components': path.resolve('src/components'),
      '@redux': path.resolve('src/redux'),
      '@utils': path.resolve('src/utils'),
      '@assets': path.resolve('src/assets'),
      '@hooks': path.resolve('src/hooks'),
      '@services': path.resolve('src/services'),
    },
  },
});

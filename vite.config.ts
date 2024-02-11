import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@src': root,
      '@containers': resolve(root, 'app/containers'),
      '@components': resolve(root, 'app/components'),
      '@services': resolve(root, 'app/services'),
      '@constants': resolve(root, 'app/constants'),
      '@hooks': resolve(root, 'app/hooks'),
    },
  },
});

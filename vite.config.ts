import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      copyDtsFiles: true,
    }),
  ],
  build: {
    rollupOptions: {
      external: ['tailwindcss', 'react', 'react-dom'],
    },
    lib: {
      entry: './src/main.tsx',
      name: '@davidcostadev/ui',
      fileName: 'main',
    },
  },
});

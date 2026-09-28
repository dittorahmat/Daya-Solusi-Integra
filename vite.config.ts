import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Pisahkan vendor berat rute-spesifik agar tidak ikut chunk awal.
          // react-markdown hanya dipakai rute blog/artikel/asesmen.
          // (Dep "motion" tidak diimpor src mana pun, jadi tidak di-chunk.)
          manualChunks: (id) => {
            if (id.includes('node_modules/react-markdown') || id.includes('node_modules/mdast') || id.includes('node_modules/remark') || id.includes('node_modules/rehype') || id.includes('node_modules/unist')) {
              return 'vendor-markdown';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

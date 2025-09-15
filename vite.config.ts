import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // vite.config.ts
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      name: 'SvelteHeadlessDropdown',
      fileName: (format) => `svelte-headless-dropdown.${format}.js`,
      formats: ['es', 'umd'],
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
});

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    target: "firefox115", // Since GJS 1.77.2

    assetsDir: '.',
    rollupOptions: {
      input: 'src/main.ts',
      output: {
        entryFileNames: 'main.js',
      },
      external: [
        new RegExp('^gi:\/\/*', 'i'),
        new RegExp('^resource:\/\/*', 'i'),
        'gettext', 'system', 'cairo'
      ],
    },
    cssMinify: false,
    minify: false
  }
})

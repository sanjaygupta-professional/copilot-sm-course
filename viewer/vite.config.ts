import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/copilot-sm-course/',
  assetsInclude: ['**/*.md'],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})

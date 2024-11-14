import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/joyful-ganache-ca34e2/', // Replace with your Netlify subpath (subdirectory name).
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',  // Ensures modern JS features are supported
    },
  },
  build: {
    target: 'esnext',    // Ensures modules are in a modern JS format
    rollupOptions: {
      output: {
        manualChunks: undefined,  // Helps with module chunking issues
      },
    },
  },
})

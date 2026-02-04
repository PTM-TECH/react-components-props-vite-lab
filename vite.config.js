import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // <-- import path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // '@' points to the src folder
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.jsx',
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
    environment: 'jsdom',
    globals: true,                  // تا نیازی به import کردن describe/it/expect نباشه
    setupFiles: './src/setupTests.ts',
    css: true,                      // اگر CSS/Modules داری
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage'
    }
  }
})

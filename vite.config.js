import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '.',
        'C:/Users/hp/.gemini/antigravity/brain/d508336c-3926-4565-aa4e-aea2f1ea7155'
      ]
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/assets": "/src/assets",
      "@/styles": "/src/styles",
      "@/pages": "/src/pages",
      "@/components": "/src/components",
      "@/constants": "/src/constants",
    }
  },
})

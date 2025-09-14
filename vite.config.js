import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    host: '0.0.0.0', // 👈 force listen on all network interfaces
    port: 5173,      // can be any free port
    strictPort: true // avoid auto-changing port
  },
  
})

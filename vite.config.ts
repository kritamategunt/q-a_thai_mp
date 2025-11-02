import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // ชื่อ repo ของคุณ
  plugins: [react()],
})

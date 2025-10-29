import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/q-a_thai_mp/',   // ชื่อ repo ของคุณ
  plugins: [react()],
})

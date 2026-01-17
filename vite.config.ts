import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ هام: هذا المسار يجب أن يطابق اسم المستودع (Repository)
  base: '/sahhan-x99/', 
})

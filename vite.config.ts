import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // هام جداً:
  // إذا كان اسم المستودع sahhan99 اتركها كما هي
  // إذا كان المستودع هو sahhan99.github.io مباشرة، اجعلها '/'
  base: '/sahhan99/', 
})

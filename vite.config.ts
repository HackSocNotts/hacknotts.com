import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

const appDir = resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@views': resolve(appDir, "views"),
      '@components': resolve(appDir, "components"),
      '@assets': resolve(appDir, "assets"),
      '@utils': resolve(appDir, "utils")
    }
  }
})

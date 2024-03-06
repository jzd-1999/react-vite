import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
      
        // additinalData: `@import "@/styles/variables.scss";`,
        // modifyVars: {
        //   'primary-color': '#1890ff',
        //   'link-color': '#1890ff',
        //   'border-radius-base': '2px',
        // },
        // javascriptEnabled: true,
      },
    },
    modules: {
      scopeBehaviour: 'local'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.scss', '.css']
  },

})

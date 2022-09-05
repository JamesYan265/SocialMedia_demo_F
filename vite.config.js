import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  server: {
    proxy : {
      '/post/timeline/': {
        target:'https://yanfamilysocialmedia-backend.herokuapp.com/api',
        changeOrigin: true
      },
      '/post/profile/': {
        target:'https://yanfamilysocialmedia-backend.herokuapp.com/api',
        changeOrigin: true
      },
      '/post': {
        target:'https://yanfamilysocialmedia-backend.herokuapp.com/api',
        changeOrigin: true
      },
      '/users/':{
        target:'https://yanfamilysocialmedia-backend.herokuapp.com/api',
        changeOrigin: true
      },
      '/users':{
        target:'https://yanfamilysocialmedia-backend.herokuapp.com/api',
        changeOrigin: true
      },
      '/auth':{
        target:'https://yanfamilysocialmedia-backend.herokuapp.com/api',
        changeOrigin: true
      },
      '/upload':{
        target:'https://yanfamilysocialmedia-backend.herokuapp.com/api',
        changeOrigin: true
      },

    }
  },
})

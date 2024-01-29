import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export  default  defineConfig ( ( { command } ) =>  { 
  const  config = { 
    plugins : [ react ()], 
    base :  '/social-media-theme-switcher/' , 
  } 

  if  (command !==  'serve' ) { 
    config. base  =  '/social-media-theme-switcher/' 
  } 

  return  config 
})

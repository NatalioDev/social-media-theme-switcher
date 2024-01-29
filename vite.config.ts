import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from "@rollup/plugin-typescript"

// https://vitejs.dev/config/
export  default  defineConfig ( ( { command } ) =>  { 
  const  config = { 
    plugins : [ react (), typescript()], 
    base :  '/' , 
  } 

  if  (command !==  'serve' ) { 
    config. base  =  '/social-media-theme-switcher/' 
  } 

  return  config 
})

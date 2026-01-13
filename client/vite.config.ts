import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Ensures your site works at lonestarcashoffertx.com/
  build: {
    outDir: '../dist', // This puts the finished website in the ROOT dist folder
  }
})
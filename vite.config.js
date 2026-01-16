import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
	base: process.env.NODE_ENV === 'production' 
    ? '/kurs-page_test/'  
    : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  }
});
// 1. вацап в ask
// 2все цифры в калькуляторе меняются 

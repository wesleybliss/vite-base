import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import aliases from './config/aliases'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: aliases,
    }
})

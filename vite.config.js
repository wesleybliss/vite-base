import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import { loadEnvironment } from './config/environment'
import aliases from './config/aliases'

// https://vitejs.dev/config/
export default defineConfig({
    define: loadEnvironment(),
    plugins: [
        react(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                // ...svgr options (https://react-svgr.com/docs/options/)
            },
        }),
    ],
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    resolve: {
        alias: aliases,
    }
})

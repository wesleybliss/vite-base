import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import svgrPlugin from 'vite-plugin-svgr'
import { getEnvironmentVars, loadEnvironment } from './config/environment'
import aliases from './config/aliases'
import injectProcessEnv from 'rollup-plugin-inject-process-env'

const env = getEnvironmentVars()

const ReactCompilerConfig = { /* ... */ }

const developmentConfig = {
    server: {
        port: process.env.PORT || 3000,
    },
}

const productionConfig = {
    build: {
        rollupOptions: {
            // @todo investigate if this is useful
            /* input: {
                main: path.resolve(__dirname, '../src/index.html'),
                dashboard: path.resolve(__dirname, '../dashboard/index.html'),
            }, */
            plugins: [
                injectProcessEnv(env, { verbose: false }),
            ],
        },
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    define: loadEnvironment(env),
    plugins: [
        // react(),
        ['babel-plugin-react-compiler', ReactCompilerConfig],
        tailwindcss(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                // ...svgr options (https://react-svgr.com/docs/options/)
            },
        }),
    ],
    esbuild: {
        // eslint-disable-next-line quotes
        jsxInject: `import React from 'react'`,
    },
    resolve: {
        alias: aliases,
    },
    ...(process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig),
})

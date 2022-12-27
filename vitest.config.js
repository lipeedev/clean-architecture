import path from 'path'
import {defineConfig} from 'vitest/config'

export default defineConfig({
    test: {
        alias: {
            '@data': path.resolve(__dirname, './src/data'),
            '@domain': path.resolve(__dirname, './src/domain'),
            '@infra': path.resolve(__dirname, './src/infra'),
            '@presentation': path.resolve(__dirname, './src/presentation'),
            '@main': path.resolve(__dirname, './src/main'),
        }
    }
})

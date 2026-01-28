import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        rollupOptions: {
            input: 'src/product-overhaul.js',
            output: {
                entryFileNames: 'bundle-product-overhaul.js',
                assetFileNames: 'bundle-product-overhaul.[ext]'
            }
        }
    }
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-components-v5',
      formats: ['es', 'cjs'],
      fileName: (format) => `react-components-v5.${format}.js`,
    },
    rollupOptions: {
      // An array of module IDs to exclude from the final bundle
      external: ['react', 'react-dom'],
      // Defines the output configuration for your bundle
      output: {
        // Maps module IDs to their corresponding global variable names
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

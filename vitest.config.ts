/// <reference types="vitest" />

import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: true, // Habilita la opción 'strict' para el sistema de archivos del servidor
    },
  },

  resolve: {
    alias: {
      "@": "/src", // Define un alias para la carpeta 'src' usando el símbolo '@'
    },
  },
  plugins: [react()], // Agrega el plugin de React para trabajar con componentes de React en los tests
  test: {
    environment: "jsdom", // Configura el entorno de pruebas como 'jsdom' para simular un entorno de navegador
    globals: true, // Habilita el acceso a las variables globales en el entorno de pruebas
  },
})

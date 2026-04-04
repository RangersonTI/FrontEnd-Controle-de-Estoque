import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { appConfig } from "./src/app/shared/configs/app";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: appConfig.BASENAME,
  server: {
    host: "0.0.0.0",
    port: 4000
  }
})
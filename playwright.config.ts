import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://randomfun.onrender.com',
    headless: true,
  },
});

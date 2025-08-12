// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
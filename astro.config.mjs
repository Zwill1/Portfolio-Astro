// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    // No adapter needed for static sites!
    output: 'static', // optional, since static is the default
    site: 'https://visualsplus.com/',
    integrations: [icon(), react(), sitemap(), partytown()],
    vite: {    
        plugins: [tailwindcss()],
    },
});
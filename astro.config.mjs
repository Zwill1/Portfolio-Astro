// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    redirects: {
        // Example for redirects
        // "/old-page": "/new-page",
        // "/blog": "https://example.com/blog"
        "/front-end-websites.php" : "/portfolio",
        "/index.php" : "/",
        "/back-end-websites.php" : "/portfolio",
        "/cms.php" : "/portfolio",
        "/ecommerce.php" : "/portfolio",
        "/graphic-design.php" : "/portfolio",
        "/education.php" : "/education",
        "/contact.php" : "/",
    },
    // No adapter needed for static sites!
    output: 'static', // optional, since static is the default
    site: 'https://visualsplus.com/',
    integrations: [icon(), react(), sitemap(), partytown({
        // Optional: forward calls to `dataLayer.push()` if using Google Tag Manager
        config: {
            forward: ['dataLayer.push'],
            debug: true,
        },
    })],
    vite: {    
        plugins: [tailwindcss()],
    },
});
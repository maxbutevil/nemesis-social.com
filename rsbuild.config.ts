import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginSolid } from '@rsbuild/plugin-solid';
import { pluginSass } from '@rsbuild/plugin-sass';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginSolid(),
    pluginSass()
  ],
  html: {
    tags: [
      {
        tag: "link",
        attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" }
      },
      {
        tag: "link", 
        attrs: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true }
      },
      {
        tag: "link",
        attrs: { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Audiowide&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" }
      }
    ]
  }
});

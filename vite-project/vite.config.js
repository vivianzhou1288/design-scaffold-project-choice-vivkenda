const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(_dirname, "index.html"),
        nested: resolve(_dirname, "attractions.html"),
        nested: resolve(_dirname, "cuisine.html"),
        nested: resolve(_dirname, "culture.html"),
      },
    },
  },
});

const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "culture.html"),
        nested2: resolve(__dirname, "cuisine.html"),
        nested3: resolve(__dirname, "attractions.html"),
      },
    },
  },
});
//You are bad
//get gud

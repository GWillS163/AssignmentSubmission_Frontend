import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const webpack = require('webpack');

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue(),

	  // new webpack.ProvidePlugin({
		// 			$: "jquery",
		// 			jQuery: "jquery",
		// 			"window.jQuery": "jquery",
		// 			Popper: ["popper.js", "default"]
		// 		  })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

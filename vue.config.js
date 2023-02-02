const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
var webpack = import('webpack');
// TODO: 安装不料WebPack
module.exports = {

	configureWebpack: {
	plugins: [
	  new webpack.ProvidePlugin({
					$: "jquery",
					jQuery: "jquery",
					"window.jQuery": "jquery",
					Popper: ["popper.js", "default"]
				  })
				]
			  },
		css: {
			loaderOptions: {
				sass: {
					additionalData: bootstrapSassAbstractsImports.join('\n')
				},
				scss: {
					additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
				}
			}
		},
	   plugins: [
		　　new webpack.optimize.CommonsChunkPlugin('common.js'),
		　　new webpack.ProvidePlugin({
		　　　　jQuery: "jquery",
		　　　　$: "jquery"
		　　})
]
	}
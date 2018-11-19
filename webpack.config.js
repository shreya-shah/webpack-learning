const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css/,
				use: [
				"style-loader",
				"css-loader"
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				loaders: ['file-loader']
			}
		]
	},
	plugins: [
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname,'public','index.html')
	})
	]
};
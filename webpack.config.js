const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		bootstrap: './src/js/bootstrap.min.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
}

module.exports = config

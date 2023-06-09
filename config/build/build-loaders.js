const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function buildLoaders(options) {
	const vueLoader = {
		test: /\.vue$/,
		loader: 'vue-loader',
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			'css-loader',
			'sass-loader',
		],
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	return [vueLoader, cssLoader, svgLoader, fileLoader]
}

module.exports = {
	buildLoaders,
}

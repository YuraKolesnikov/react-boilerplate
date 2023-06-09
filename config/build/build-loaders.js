const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function buildLoaders(options) {
	const babelLoader = {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-react'],
			},
		},
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			'css-loader',
			'sass-loader',
		],
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [babelLoader, cssLoader, svgLoader, fileLoader];
}

module.exports = {
	buildLoaders,
};

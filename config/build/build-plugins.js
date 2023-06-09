const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function buildPlugins({ paths, isDev }) {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: isDev,
		}),
		new webpack.HotModuleReplacementPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: isDev,
		}),
	];
}

module.exports = {
	buildPlugins,
};

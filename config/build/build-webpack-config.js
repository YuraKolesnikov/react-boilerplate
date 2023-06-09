const { buildDevServer } = require('./build-dev-server')
const { buildLoaders } = require('./build-loaders')
const { buildPlugins } = require('./build-plugins')
const { buildResolvers } = require('./build-resolvers')

function buildWebpackConfig(options) {
	const { paths, mode, isDev } = options

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true
		},
		module: {
			rules: buildLoaders(options)
		},
		plugins: buildPlugins(options),
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}

module.exports = { buildWebpackConfig }

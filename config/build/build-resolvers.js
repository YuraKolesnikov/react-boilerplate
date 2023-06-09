function buildResolvers(options) {
	return {
		extensions: ['.js', '.vue'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	}
}

module.exports = {
	buildResolvers,
}

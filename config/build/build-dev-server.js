function buildDevServer(options) {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
	}
}

module.exports = {
	buildDevServer,
}

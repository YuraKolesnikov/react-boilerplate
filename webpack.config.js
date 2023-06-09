const path = require('path')
const webpack = require('webpack')
const detect = require('detect-port')

const { buildWebpackConfig } = require('./config/build/build-webpack-config')

const defaultExport = async env => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  const availablePort = await detect(+env.port)

  if (+env.port !== availablePort) {
    console.log(
      `Port ${env.port} is already in use. Trying ${availablePort}...`
    )
  }

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: availablePort,
  })

  return config
}

module.exports = defaultExport

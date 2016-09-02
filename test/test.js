console.log('gc52-nonclick-bug-compensate: test');

// Modules
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opener = require('opener');

const config = {
	entry: {
		app: [
			"webpack-dev-server/client?http://localhost:8080/",
			"webpack/hot/dev-server",
			'./test/index.js'
		]
	},
	output: {
		path: __dirname,
		filename: 'bundle_index.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				ignore: [
					'babel-polyfill',
					'core-js'
				],
				presets: [
					"babel-preset-latest",
					"babel-preset-stage-0"
				]
			}
		}],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
}

const instance = webpack(config);

const server = new webpackDevServer(instance, {
	contentBase: "./test/",
	hot: true,
	inline: true
});

// callback実行時でもバンドルが終わってない…
server.listen(8080, (e)=>{
	opener('http://localhost:8080/');
});

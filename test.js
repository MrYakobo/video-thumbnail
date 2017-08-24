var fs = require('fs')
var download = require('download')
var videothumb = require('./index.js')
var opn = require('opn')
var mkdirp = require('mkdirp')

function cb() {
	console.log('Now converting and compressing video...')

	videothumb('test/BigBuckBunny_320x180.mp4', 'test/preview.mp4').then(() => {
		console.log('Now previewing final result:')
		opn(__dirname + '/test/preview.mp4')
	}).catch((err)=>{
		throw err
	});
}

mkdirp.sync('test')

if (fs.readdirSync('test').length === 0) {
	console.log('Downloading test video...')
	download('http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4', 'test').then(() => {
		cb();
	})
} else {
	cb();
}
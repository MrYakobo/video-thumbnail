var fs = require('fs')
var download = require('download')
var thumb = require('./index.js')
var opn = require('opn')
var mkdirp = require('mkdirp')

main()

async function main() {
	mkdirp.sync('test')

	if (fs.readdirSync('test').length === 0) {
		console.log('Downloading test video...')
		await download('http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4', 'test')
	}

	console.log('Now converting and compressing video...')
	await thumb.video('test/BigBuckBunny_320x180.mp4', 'test/preview.mp4')
	console.log('Now previewing final result:')
	opn(__dirname + '/test/preview.mp4')
}
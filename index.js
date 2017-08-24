var exec = require('child_process').exec
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')

module.exports = function (inputfile, outputfile) {
	return new Promise((resolve, reject) => {
		//if inputfile doesn't exist, reject
		fs.access(inputfile, (err) => {
			if (err) reject(err)
		})
		//make sure the path to output exists
		var dir = path.dirname(outputfile)
		fs.access(dir, (err)=>{
			if(err) mkdirp.sync(dir)
		})

		var cmd = `ffmpeg -y -i ${inputfile} -ss 00:00:30 -t 00:00:5 -r 10 -vf "scale=w=290:h=217:force_original_aspect_ratio=decrease" -an ${outputfile}`
		exec(cmd, (err, stdout, stderr) => {
			if (err) {
				reject(err)
			}
		}).on('exit', () => {
			resolve()
		})
	})
}
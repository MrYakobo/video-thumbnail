#!/usr/bin/env node

var thumb = require('./index.js')
var app = require('commander')

var i, o;

app
.version('1.0.0')
.arguments('<input> <output> [options]')
.option('-w, --width', 'Width')
.option('-h, --height', 'Height')
.action((input, output, options) => {
    i = input
    o = output
})
.parse(process.argv)

if (typeof (i) === 'undefined' || typeof (o) === 'undefined') {
    console.log('Input or Output not given. Now exiting')
    process.exit(1)
}

thumb(i, o, {
    width: app.width,
    height: app.height
}).catch((err) => {
    console.log(err)
})
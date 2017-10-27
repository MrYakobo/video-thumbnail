#!/usr/bin/env node

var thumb = require('./index.js')
var app = require('commander')
var path = require('path')
var opn = require('opn')
var fs = require('fs-extra')
var chalk = require('chalk')
var filesize = require('filesize')

async function main() {
    var i, o;

    app
        .version(JSON.parse(fs.readFileSync(__dirname + '/package.json')).version)
        .arguments('<input> [output] [options]')
        .option('-w, --width [number]', 'Width')
        .option('-h, --height [number]', 'Height')
        .option('-p, --preview', 'watch video after conversion is complete')
        .option('-s, --stats', 'print stats about the conversion')
        .option('-q, --quiet', 'disable all output')
        .action((input, output, options) => {
            i = input
            o = output
        })
        .parse(process.argv)

    if (typeof (i) === 'undefined') {
        console.log('Input not given. Now exiting')
        process.exit(1)
    }

    //render video
    var output = await thumb.video(i, o, { width: app.width, height: app.height, quiet: app.quiet })

    if (app.stats && !app.quiet) {
        var stat = await fs.stat(output)
        var stat2 = await fs.stat(i)
        var diff = stat2.size - stat.size
        if(diff > 0){
            console.log(chalk.gray.underline(output) + ': ' + chalk.green.bold(filesize(diff) + chalk.blue(' saved! ✔')))
        }
        else
            console.log(chalk.gray.underline(output) + ': ' + chalk.red.bold(filesize(-diff) + ' increase in filesize. ' + chalk.yellow('(i.e. this "compression" was useless)')))
    }
    if (app.preview) {
        opn(output)
    }
}

main()
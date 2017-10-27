# Video-thumbnail
This is a simple module meant to generate a "video thumbnail", one of those you see on Youtube when you hover your mouse over a related video.

This module creates a preview video, consisting of three subclips à 3 seconds from the original clip. This makes sure that every "important" part has a good chance of being represented.
If the input video is short, the preview will contain fewer subclips.

It uses FFmpeg and some error handling. Returns a promise.

## Example output
Below is a generated, 15 seconds long video-thumbnail of the [Bick Buck Bunny movie](https://www.youtube.com/watch?v=YE7VzlLtp-4).

![bigbuckbunny](https://user-images.githubusercontent.com/11942597/29752124-6d60e0fc-8b58-11e7-837d-5a7f0d068320.gif)

## Usage

```javascript
var thumb = require('video-thumbnail')
thumb.video(input, output, options)
//Where options is an object with the optional entries width and height
```

If you want to make only one of these clips, it's exposed in the `clip` function.

```javascript
thumb.clip(input, output, start, duration, options)
//where start and duration are integers
```

As `.clip` is lower level than `.video`, it uses no error handling for input/output files.

Example:
```javascript
//null indicates automatic output filename, silent disables a disclaimer about this behaviour
thumb.video('input.mp4', null, {width: 200, silent:true}).then(()=>{
    console.log('Done!')
}).catch((err)=>{
    console.log(err)
})

```
```javascript
(async function(){
    await thumb.clip('input.mp4', 'output.mp4', {width: 150})
    console.log('Done!')
})()
```

If only one of width/height is given, the aspect ratio of the input is used to calculate the other dimension. If both are left out, it defaults to `{width: 300}`.

## Global usage
Install with `npm i -g video-thumbnail`
Now, you can use `video-thumbnail in.mp4 out.mp4`, along with the optional `--width` and `--height` arguments. Outputs to `in-preview.mp4` if output is omitted.

## Dependencies
FFmpeg

## License
MIT

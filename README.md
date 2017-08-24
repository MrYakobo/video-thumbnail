# Video-thumbnail
This is a simple module meant to generate a "video thumbnail", one of those you see on Youtube when you hover your mouse over a related video.

This module creates a preview video, consisting of three subclips from three parts of the original clip. This makes sure that every "important" part has a good chance of being represented.

It uses FFmpeg and some error handling. Returns a promise.

## Usage

```javascript
var videothumb = require('video-thumbnail')
videothumb(input, output, options)
//Where options is an object with the optional entries width and height
```

Example:
```javascript
videothumb('input.mp4','output.webm', {width: 200}).then(()=>{
    console.log('Done!')
}).catch((err)=>{
    console.log(err)
})
```

If only one of width/height is given, the aspect ratio of the input is used to calculate the other dimension. If both are left out, it defaults to `{width: 300}`.

## Dependencies
FFmpeg

## License
MIT
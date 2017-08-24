# Video-thumbnail
This is a simple module meant to generate a "video thumbnail", one of those you see on Youtube when you hover your mouse over a related video. It uses FFmpeg and some error handling. Returns a promise.

## Usage

```javascript
var videothumb = require('video-thumbnail')
videothumb('input.mp4','output.webm').then(()=>{
    console.log('Done!')
}).catch((err)=>{
    console.log(err)
})
```

## Dependencies
FFmpeg

## License
MIT
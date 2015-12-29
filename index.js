var get = require('simple-get')
var fs = require('fs')

get('https://www.google.com', function (err, res) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  res.pipe(fs.createWriteStream('google.html'))
})
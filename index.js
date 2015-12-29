var get = require('simple-get')

get('https://www.google.com', function (err, res) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  res.pipe(process.stdout)
})
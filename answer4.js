var fs = require('fs')

fs.readFile(process.argv[2], function (err, res) {
  lines = res.toString().split('\n').length - 1
  console.log(lines)
})


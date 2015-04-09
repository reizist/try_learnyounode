var fs = require('fs')
var path = require('path')
var filtered = '.' + process.argv[3]

fs.readdir(process.argv[2], function (err, list) {
  for(var i = 0; i < list.length; i++) {
     if(path.extname(list[i]) == filtered) console.log(list[i])
  }
})


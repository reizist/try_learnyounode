var fs = require('fs')
var path = require('path')

module.exports = function(dir, file_ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err)
    
    var files = list.filter(function (f) {
      return (path.extname(f) === ('.' + file_ext))
    })
    callback(null, files)
  })
}

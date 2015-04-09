var readDir = require('./modules/answer6_module')
var dir = process.argv[2]
var filter = process.argv[3]

readDir(dir, filter, function(err, list) {
  list.forEach(function (i) {
    console.log(i)
  })
})



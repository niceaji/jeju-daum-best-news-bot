
var  fs = require('fs');

function save(filename, contents , callback){

	fs.writeFile(filename, contents, callback);

}

exports.save = save;
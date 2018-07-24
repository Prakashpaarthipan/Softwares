//console.log(process.argv[2]);

'use strict';

const args = require('yargs').argv;
const fs = require('fs');
var fileName,fileExt,fileContent;
console.log('File Name: ' + args.name);  
console.log('File Extension: ' + args.ext);
console.log('Content: ' + args.datas);
fileName= args.name;
fileExt=args.ext;
fileContent = args.datas;
var createFile = fs.appendFile(fileName +'.'+ fileExt, fileContent , function(err){
	if(err) throw err;
	console.log(JSON.stringify(createFile));

}); 
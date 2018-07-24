
/*
/ Create a file based on user's input.
*/
var file = require('fs');

// var readTxt = require('readline-sync');
// var fileName = readTxt.question('Enter the file name(eg. ):');
// console.log('Hi'+fileName+'file created!');
// readTxt.close();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// toCreate();
// function toCreate(){
    
//     rl.question('Please enter a text file name (without Extension) ', (value) => {
//     let color = value;
   	
//     var createStream = file.createWriteStream(`${dir}${color}.txt`);
// 	createStream.end();
//     console.log(`Your file has been created :${color}`+'.txt');
//     rl.close();
// })
// }
//--------------------------------
//open the file and write the user input
// toRead();
//  function toRead(resp){
//  	var datas = file.readFile(`${dir}raja.txt`, "utf8", function(err, data) {
//  		if (err) throw err;
//   		console.log(data);
        
//     });
//  }
//--------------------------------
// create a dirctory

	const dir = './upload/';
if(!file.existsSync(dir)){
	file.mkdirSync(dir);
	
}

file.stat(dir, function(err, fileStat) {
    if (err) {
        if (err.code == 'ENOENT') {
            console.log('Does not exist.');
        }
    } else {
        if (fileStat.isFile()) {
            console.log('File found.');
        } else if (fileStat.isDirectory()) {
            console.log('Directory found.');
        }
    }
});
file.rename('./test.txt', 'upload/testCopy.txt', function (err) {
  if (err) throw err;
  console.log('Move complete.');
});
// file.writeFile('test.txt', 'Hello, ', function(err) {
//     if (err) throw err;
// })

// file.appendFile('test.txt', 'World\n');
//list the no.of files from specfic directory

		// var files = file.readdirSync(`${dir}`);
		// var j=1;
		// console.log('List of files ');
		// for (var i in files) {
		//   //console.log(files[i].toString());
		//   //var definition = require(`${dir}` + files[i]).Model;
		//   //console.log(`File ${i} :` + files[i]);
		//   // console.log(`File`+ parseInt(+i+1) +`:` + files[i]);
		//   	console.log(`File`+ (+i+1) +`:` + files[i]);
		  	
		// }


//upload the files to upload directory
		//console.info('hai');
		//console.warn('hi');
		//console.log(JSON.stringify(file));
		// var JSONfile = JSON.stringify(file,undefined,2);

		// console.log(JSONfile);
		// console.log('\n');

		// var prettyjson = require('prettyjson');
		// console.log(prettyjson.render(JSONfile, {
		//   keysColor: 'rainbow',
		//   dashColor: 'magenta',
		//   stringColor: 'white'
		// }));

//upload to ftp



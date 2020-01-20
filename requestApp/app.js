var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
var port = 8080;

//example 1
var url = "http://google.com";
request(url, function(err, resp, body){
    if(err){
        console.log(err);
    }else {
        console.log(body);
    }
});

//example 2
// var url ="http://google.com";
// var destination = fs.createWriteStream('./download/google2.html');
// request(url)
// .pipe(destination);

//example 2
// var url ="http://google.com";
// var destination = fs.createWriteStream('./download/google2.html');
// request(url)
// .pipe(destination);
// .on('finish', function(){
//     console.log('all done');
// })
// .on('error', function(err){
//     console.log(err);
// });

//example 3
//request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))
//request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'))
//fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'))
// request
//   .get('http://google.com/img.png')
//   .on('response', function(response) {
//     console.log(response.statusCode) // 200
//     console.log(response.headers['content-type']) // 'image/png'
//   })
//   .pipe(request.put('http://mysite.com/img.png'))

app.listen(port, function() {
    console.log('app listening on port'+port);    
});
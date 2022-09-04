// var name ="Programming hero";
const {name,add} =require('./other')

const http = require('http');

//third party module name underscore
const _=require("underscore")


const server = http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('Hello World!');
    // console.log(`server is running`)
  });
  server.listen(5000);

const result =add(2,3)
// console.log(result)
// console.log(name);
_pluck(stooges,'name')
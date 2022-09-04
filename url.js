const http =require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    const address_url ='http:/localhost:5000/contact?name=mezba&country=bangladesh';
  const parsed_url=  url.parse(address_url,true)
  console.log(parsed_url);
})
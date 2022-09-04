const other =require('./new2')


// const resutl =other.substraction(7,2)
// console.log(resutl)

const http =require('http')

const server = http.createServer((req,res)=>{
    res.end('hello node.js')
})
const PORT=5000;
server.listen(PORT)
console.log(`SERVER IS RUNNING AT ${PORT}`)
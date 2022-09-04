const other =require('./new2')


// const resutl =other.substraction(7,2)
// console.log(resutl)

const http =require('http')

const server = http.createServer((req,res)=>{
    // res.send('hello node.js')
    // console.log(req.url)
    // if(req.url=='/'){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<p>This is a home page</p>')
    //     res.end()
    // }


    // if(req.url='/'){
    //     fs.readFile("data.txt",(err,data)=>{
    //         if(err){
    //             res.write('Failed to read data !!!')
    //             res.end()
    //         }else{
    //             res.write(data)
    //             res.end()

    //         }
    //     })
    // }
    // const data=  fs.readFileSync('data.txt')
    // res.write(data)
    // res.end()



    
    // if(req.url=='/'){
    //     res.writeHead(200,{'Content-Type':'application/json'})
    //     res.write(JSON.stringify({course:"ACC"}))
    //     res.end()
    // }




    // else if(req.url=='/contact'){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<p>This is a contact page</p>')
    //     res.end()
    // }
    // else if(req.url=='/about-us'){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<p>This is a about page</p>')
    //     res.end()
    // }
    
})
// console.log(url)
const PORT=5000;
server.listen(PORT)
console.log(`SERVER IS RUNNING AT ${PORT}`)
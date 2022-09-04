const http =require('http')
const fs =require('fs')

const server =http.createServer((req,res)=>{
    if(req.url='/'){
        fs.readFile("data.txt",(err,data)=>{
            if(err){
                res.write('Failed to read data !!!')
                res.end()
            }else{
                res.write(data)
                res.end()

            }
        })
    }
})
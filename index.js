import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";
import http from "http";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

const server = http.createServer((req,res)=>{
    console.log("Request dibuat");

    async function panggil(){
    res.setHeader('Content-Type', 'text/html');
    let data = await fsPromises.readFile('./pages/main.html')
    res.write(data);
    res.end(data);
    }
    
    
    async function routing(){
        res.setHeader('Content-Type', 'text/html');
        let path = './Pages/';
        if(req.url=='/'){
            path+='main.html';
            res.statusCode=200;
        }else if(req.url=='/about'){
            path+='about.html';
            res.statusCode=200;
        }else if(req.url=='/contact'){
            path+='contact.html';
            res.statusCode=200;
        }else{
            path+='404.html';
            res.statusCode=404;
        }

        let data = await fsPromises.readFile(path);
        res.end(data);
    }

    routing();
    
})

server.listen(3000,'localhost',()=>{
    console.log("Mendengar request");
})


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
    panggil();
    
    
})

server.listen(3000,'localhost',()=>{
    console.log("Mendengar request");
})


import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const getData = async (filepath) => {
    return await fs.readFile(path.join(dirname, ...filepath), "utf-8");
}


const router = async (req, res) => {
    switch(req.url){
        case "/": 
            if (req.method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end( await getData(["public", "index.html"]) );   
            } else {
                res.writeHead(402, { "Content-Type": "text/html" });
                res.end( await getData(["public", "402.html"]) );
            }
        break;

        case "/about": 
            if (req.method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end( await getData(["public", "about.html"]) );   
            } else {
                res.writeHead(402, { "Content-Type": "text/html" });
                res.end( await getData(["public", "402.html"]) );
            }
        break;

        case "/contact-me": 
            if (req.method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end( await getData(["public", "contact-me.html"]) );   
            } else {
                res.writeHead(402, { "Content-Type": "text/html" });
                res.end( await getData(["public", "402.html"]) );
            }
        break;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end( await getData(["public", "404.html"]) );
    }
}


export {
    router
}
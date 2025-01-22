import { createServer } from 'node:http';

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world");
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})
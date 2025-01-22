import { createServer } from 'node:http';
import { router } from './router.js';

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const server = createServer(async (req, res) => {
    try {
        router(req, res);
    } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})
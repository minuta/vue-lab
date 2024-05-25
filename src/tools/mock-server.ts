import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
// import {log} from './logger.ts';
import {Logger} from './logger.ts';
const user = {id: '1', name: 'John Wick', role: 'Assassin'};
const logger = new Logger('mock-server');

// const handleGetUsers = (res: ServerResponse) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.writeHead(200);
//     res.end(JSON.stringify(users));
// };

// const handleGetUserById = (id: number, res: ServerResponse) => {
//     const user = users.find(u => u.id === id);
//     if (user) {
//         res.setHeader('Content-Type', 'application/json');
//         res.writeHead(200);
//         res.end(JSON.stringify(user));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'User not found' }));
//     }
// };

const handlePostUsers = (req: IncomingMessage, res: ServerResponse) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const newUser = JSON.parse(body);
        // users.push(newUser);
        // res.setHeader('Content-Type', 'application/json');

        res.writeHead(201, {
            'Content-Type': 'application/json'
        });

        let str = JSON.stringify(newUser);
        logger.log("getting a POST request : " + str);

        res.end(str);
    });
};

const handleSingleId = (res:ServerResponse) => {
    res.writeHead(200, {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    });

    let str = JSON.stringify(user);
    logger.log("returning this : " + str);
    res.end(str);
}



const server = createServer((req: IncomingMessage, res: ServerResponse) => {

    // avoid CORS issues
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = parse(req.url || '', true);
    const path = parsedUrl.pathname;
    const method = req.method;

    switch (true) {
        // case path === '/api/users' && method === 'GET':
        //     handleGetUsers(res);
        //     break;

        case path === '/api/users/1' && method === 'GET': {
            logger.log("got a GET request for user 1...")
            handleSingleId(res);
            break;
        }

        case path === '/api/users' && method === 'POST':
            logger.log("got a POST request for updating user data...")
            handlePostUsers(req, res);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    logger.log(`Mock server is running at http://localhost:${PORT}`);
});
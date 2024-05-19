import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

const users = [
    { id: 1, name: 'John Wick', role: 'Assassin' },
    { id: 2, name: 'Usain Bolt', role: 'Runner' },
];

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

// const handlePostUsers = (req: IncomingMessage, res: ServerResponse) => {
//     let body = '';
//     req.on('data', chunk => {
//         body += chunk.toString();
//     });
//
//     req.on('end', () => {
//         const newUser = JSON.parse(body);
//         users.push(newUser);
//         res.setHeader('Content-Type', 'application/json');
//         res.writeHead(201);
//         res.end(JSON.stringify(newUser));
//     });
// };

const handleSingleId = (res:ServerResponse) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    console.log("get a request for id 1 : " + users[0]);
    res.end(JSON.stringify(users[0]));
}

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url || '', true);
    const path = parsedUrl.pathname;
    const method = req.method;

    switch (true) {
        // case path === '/api/users' && method === 'GET':
        //     handleGetUsers(res);
        //     break;

        case path === '/api/users/1' && method === 'GET':
            console.log("foobar")
            handleSingleId(res);
            break;

        // case path === '/api/users' && method === 'POST':
        //     handlePostUsers(req, res);
        //     break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Mock server running at http://localhost:${PORT}`);
});
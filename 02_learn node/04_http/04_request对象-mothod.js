const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    if (pathname === '/login') {
        // 拿到body中的数据
        if (req.method === 'POST') {
            req.setEncoding('utf-8');
            req.on('data', (data) => {
                const { username, password } = JSON.parse(data);
                console.log(username, password);
            })
            res.end("hello world");
        }
    }
})

// 启动服务器，并且指定端口号和主机
server.listen('8888', '0.0.0.0', () => {
    console.log("服务器启动成功～");
})
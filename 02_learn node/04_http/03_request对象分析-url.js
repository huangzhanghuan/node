const http = require('http');
const url = require('url');
const qs = require('querystring')

const server = http.createServer((req, res) => {
    
    // request 对象中封装了客户端给我们服务器传递过来的所有信息
    const { pathname, query } = url.parse(req.url);
    console.log(pathname, query);
    if (pathname === '/login') {
        const { username, password } = qs.parse(query);
        console.log(username, password);
    }
})

// 启动服务器，并且指定端口号和主机
server.listen('8888', '0.0.0.0', () => {
    console.log("服务器启动成功～");
})
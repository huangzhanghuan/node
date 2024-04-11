const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // 响应结果
    res.write('响应结果1');
    res.end();
})

// 启动服务器，并且指定端口号和主机
server.listen('8888', '0.0.0.0', () => {
    console.log("服务器启动成功～");
})
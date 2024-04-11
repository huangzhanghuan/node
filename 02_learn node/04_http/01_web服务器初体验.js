const http = require('http');

// 创建一个服务器
const server = http.createServer((req, res) => {
    res.end("hello world");
    
})

// 启动服务器，并且指定端口号和主机
server.listen(8000, '127.0.0.1', () => {
    console.log('服务器启动成功');
});
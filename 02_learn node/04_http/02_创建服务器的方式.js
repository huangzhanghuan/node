const http = require('http');

const server1 = http.createServer((req, res) => {
    res.end('Server1');
})

server1.listen(8000, () => {
    console.log("server1启动成功");
})

const server2 = new http.Server((req, res) => {
    res.end('Server2');
});

server2.listen(8001, () => {
    console.log("server2启动成功");
})

// 2.监听方法的使用

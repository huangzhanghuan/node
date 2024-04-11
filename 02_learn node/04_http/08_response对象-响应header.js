const http = require('http');

const server = http.createServer((req, res) => {
    // 设置响应的header
    // 设置方式一
    // res.setHeader("Content-Type", "text/plain;charset=utf-8")
    // 设置方式二
    res.writeHead(200, {
      'Content-Type': "text/html;charset=utf-8"
    })
    
    res.write('响应结果1');
    res.end('<h2>Hello Server</h2>');

})

// 启动服务器，并且指定端口号和主机
server.listen('8888', '0.0.0.0', () => {
    console.log("服务器启动成功～");
})
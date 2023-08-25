// 文件描述符是什么？
// POSIX系统上，对于每个进程，内核都维护着一张当前大开着的文件和资源的表格
// 每个打开的文件都分配了一个称为文件描述符的简单的数字标识符
// 在系统层，所有文件操作都使用这些文件描述符来标识和跟踪每个特定的文件
// windows系统使用了一个虽然不同但概念上类似的机制才跟踪资源

// 为了简化用户的工作，Node.js抽象出操作系统之间的特定差异，并为所有打开的文件
// 分配一个数字型的文件描述符

const fs = require('fs');

fs.open('./abc.txt',(err, fd)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(fd);

    // 根据文件描述符 得到文件信息
    fs.fstat(fd, (err, info)=>{
        console.log(info);
    })
})
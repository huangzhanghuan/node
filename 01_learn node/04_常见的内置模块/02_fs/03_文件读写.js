const fs = require('fs');

const content = '你好啊，李银河'

// fs.writeFile('./abc.txt',content, err=>{
//     console.log(err);
// })

// 如果我们希望对文件的内容进行操作，这个时候可以使用文件的读写：
// fs.readFile(path, [,options], callback): 读取文件的内容
// fs.writeFile(file, data,[, options], callback): 在文件中写入内容
// options参数：flag：写入的方式 encoding：字符的编码

fs.readFile('./abc.txt', { encoding: 'utf-8' } ,(err, data)=>{
    console.log(data);
})

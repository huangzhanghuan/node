const path = require('path')
// 获取路径的信息
// dirname: 获取文件的父文件夹
// basename：获取文件名
// extname：获取文件扩展名
// const filepath = '/user/why/abc.txt'

// console.log(path.dirname(filepath))
// console.log(path.basename(filepath))
// console.log(path.extname(filepath))

// 2.join 路径拼接
// 如果我们希望将多个路径进行拼接，但是不同的操作系统可能使用的是不同的分隔符
// 这个时候我们可以使用path.join函数
// const basepath = '/User/why'
// const filename = 'abc.txt'
// const filepath = path.join(basepath, filename);
// console.log(filepath)

//3.resolve路径拼接
// 如果我们希望将某个文件和文件夹拼接，可以使用path.resolve
// resolve会判断拼接路径的字符串中是否以/ ./ ../开头的部分
// 如果有表示的是一个绝对路径，会返回对应的拼接路径；
// 如果没有，那么会和当前执行文件所在的文件夹进行路径的拼接
const basepath = 'User/why'
const filename = 'abc.txt'
const filepath = path.resolve(basepath, filename);
console.log(filepath)



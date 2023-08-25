// fs是file system的缩写，表示文件系统
// 对于任何一个为服务器端服务的语言或者框架通常会有自己的文件系统
// 因为服务器需要将各种数据、文件放置到不同的地方；
// 比如用户数据可能大多数是放到数据库中的
// 比如某些配置文件或者用户资源（图片、音视频）都是以文件的形式存在于操作系统上的；

// Node也有自己的文件系统操作模块，就是fs
// 借助于Node帮我们封装的文件系统，我们可以在任何的操作系统上直接去操作文件；
// 这也是Node可以开发服务器的一大原因，也是它可以成为前端自动化脚本等热门工具的原因

// 这些API大多数都提供三种操作方式
// 方法一：同步操作文件：代码会被阻塞。不会继续执行
// 方法二：异步回调函数操作文件：代码不会被阻塞，需要传入回调函数，当获取到结果时，回调函数被执行
// 方法三：异步Promise操作文件：代码不会被阻塞，通过fs.promise调用方法操作，会返回一个Promise，可以通过then、catch进行处理


const fs = require('fs');

const filepath = './abc.txt'
// 读取文件的信息
// 方式一：同步操作
// const info = fs.statSync(filepath)

// console.log('后续要执行的代码')
// console.log(info);


// 方式二：异步操作
// fs.stat(filepath, (err, info)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(info)
// })
// console.log('后续要执行的代码')

// 方式三：promise
fs.promises.stat(filepath).then(info=>{
    console.log(info)
    console.log(info.isFile());
    console.log(info.isDirectory());
}).catch(err=>{
    console.log(err)
})


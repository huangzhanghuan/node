const path = require('path')

const basePath = '/User/why'
const filename = 'abc.txt'

const filepath = path.resolve(basePath, filename);

console.log(filepath);


// path模块用于对路径和文件进行处理，提供了很多好用的方法
// 并且我们知道Mac OS、Linux 和 window上的路径时不一样的；
// window上会使用 \或者 \\来作为文件路径的分隔符，目前也支持 /
// 在Mac OS、Linux和Unix操作系统上使用/来作为文件路径的分隔符
// 那么如果我们在window上使用\来作为分隔符开发了一个应用程序，要部署到linux上面怎么办
// 显示路径会出现一些问题
// 所以为了屏蔽他们之间的差异，在开发中对于路径的操作我们可以使用path模块
// 可移植操作系统接口（POSIX接口）
// linux和Mac OS都实现了POSIX接口
// Window部分电脑实现了POSIX接口


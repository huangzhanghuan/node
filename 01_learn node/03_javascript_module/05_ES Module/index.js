// 常见的导入方式也有三种


// 一：普通导入方式
import { name, age, sayHello } from './modules/foo.js'

// 二：导出变量后可以起别名
import { name as wName, age as wAge, sayHello as wSayHeelo } from './modules/foo.js'

// 三： * as foo
import * as foo from './modules/foo.js'

console.log(foo.name);
console.log(foo.age)
foo.sayHello('王小波');

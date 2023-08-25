

//导出方式 三种
//一：方式一

export const name = 'why'
export const age = 18;
export const sayHello = function(name){
    console.log('您好'+name)
}

//导出方式 三种
//二：方式二
// {}打括号，但是不是一个对象
// {}是导出的变量的引用列表


const name = 'why'
const age = 18;
const sayHello = function(name){
    console.log('您好'+name)
}
export{
    name,
    age,
    sayHello
}


//导出方式
//三：可以给变量起别名

const name = 'why'
const age = 18;
const sayHello = function(name){
    console.log('您好'+name)
}
export{
    name as fName,
    age as fAge,
    sayHello as fSayHello
}

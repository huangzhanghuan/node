// Node中的核心API都是基于异步事件驱动的
// 在这个体系中，某些对象（发射器（Emitters））发出某一个事件
// 我们可以监听这个事件（监听器（Listeners）），并且传入的回调函数，这个回调函数会在监听到事件时调用

// 发出事件和监听事件都是通过EventEmitter类来完成的，它们都属于events对象
// emitter.on(eventName,listener): 监听事件，也可以使用 addListener
// emitter.off(eventName,listener): 移除监听事件，也可以使用 removeListener
// emitter.emit(eventName,[...args]): 发出事件，可以携带一些参数

const eventEmitter = require('events');

// 1. 创建发射器
const emitter = new eventEmitter();

// 2. 监听某一个事件
// addEventListener 是 on 的一个简写
emitter.on('click',(args) =>{
    console.log('监听1到click事件', args)
})

const listener2 = (args) =>{
    console.log('监听2到click事件', args)
}
emitter.on('click',listener2)

setTimeout(()=>{
    emitter.emit('click', 'coderwhy', 'james');
    emitter.off('click', listener2)
    emitter.emit('click', 'coderwhy', 'james');
},2000)




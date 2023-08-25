const eventEmitter = require('events');

const emitter = new eventEmitter();

emitter.on('click',(args) =>{
    console.log('监听1到click事件', args)
})

const listener2 = (args) =>{
    console.log('监听2到click事件', args)
}
emitter.on('tap',listener2)


// 获取注册的事件
console.log(emitter.eventNames());
console.log(emitter.listenerCount('click'));
console.log(emitter.listeners('click'));
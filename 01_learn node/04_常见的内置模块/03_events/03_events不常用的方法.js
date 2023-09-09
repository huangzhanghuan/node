const eventEmitter = require('events');

const emitter = new eventEmitter();

// once 只执行一次
emitter.once('click',(arg1, arg2, arg3) =>{
    console.log('监听1到click事件', arg1, arg2, arg3)
})

const listener2 = (args) =>{
    console.log('监听2到click事件', args)
}
emitter.on('click',listener2)

// prependListener 将本次执行放到最前面
emitter.prependListener('click',(arg1, arg2, arg3) =>{
    console.log('监听3到click事件', arg1, arg2, arg3)
})


setTimeout(()=>{
    // emitter.removeAllListeners();
    emitter.emit('click', 'coderwhy', 'james');
    emitter.emit('click', 'coderwhy', 'james');
},2000)




setTimeout(()=>{
    console.log('setTimeout')
}, 2000)

setInterval(()=>{
    console.log('setInterval')
},1000)

// 立即执行
setImmediate(()=>{
    console.log('immediate')
})

// 下一帧
process.nextTick(()=>{
    console.log('process nextTick')
})
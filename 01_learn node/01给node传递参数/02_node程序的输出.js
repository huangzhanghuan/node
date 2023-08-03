console.log(process.argv[2])
console.log(process.argv[3])

// 清空
console.clear()

process.argv.forEach(item=>{
    console.log(item)
})



function foo() {
    bar()
}
function bar() {
    // 打印调用栈
    console.trace()
}

foo()

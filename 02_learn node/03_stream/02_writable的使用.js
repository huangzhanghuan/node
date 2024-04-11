const fs = require('fs');

// 传统的写入方式
// fs.writeFile("./bar.txt", "hello Stream", { flag: "a" }, (err) => {
//     console.log(err);
// })

const writer = fs.createWriteStream("./bar.txt", {
    flags: "a",
    start: 4,
})

writer.write("您好啊", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("写入成功");
})
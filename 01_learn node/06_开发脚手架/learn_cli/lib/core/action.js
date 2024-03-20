const { promisify } = require('util')
const path = require('path');

const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo.config.js')
const { commandSpawn } = require('../utils/terminal.js')
const { compile, writeToFile, createDirSync } = require('../utils/utils.js')

// callback -> promisify(函数) -> Promise -> async await
const createProjectAction = async (project) => {
    console.log("why helps you create your project~");

    // 1.clone项目
    await download(vueRepo, project, { clone: true });
    
    // 2.执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], { cwd: `./${project}` });

    // 3.运行项目 npm run serve
    await commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` });
}

// 添加组件的action
const addComponentAction = async(name, dest) => {
    // 1.有对应的ejs模块
    // 2.编译ejs模块 result
    const result = await compile("vue-component.ejs", { name, lowerName: name.toLowerCase() });

    // 3.写入文件的操作
    const targetPath = path.resolve(dest, `${name}.vue`);
    writeToFile(targetPath, result);  
}

// 添加组件和路由
const addPageAndRouteAction = async (name, dest) => {
    // 1.编译ejs模版
    const data = { name, lowerName: name.toLowerCase() }
    const pageResult = await compile('vue-component.ejs', data);
    const routeResult = await compile('vue-router.ejs', data);

    // 3.写入文件
    if (createDirSync(dest)) {
        const targetPagePath = path.resolve(dest, `${name}.vue`);
        const targetRoutePath = path.resolve(dest, `router.js`);

        writeToFile(targetPagePath, pageResult);
        writeToFile(targetRoutePath, routeResult);
    }
}

const addStoreAction = async (name, dest) => {
    // 1.编译的过程
    const storeResult = await compile('vue-store.ejs', {});
    const typesResult = await compile('vue-types.ejs', {});

    // 2.创建文件
    if (createDirSync(dest)) {
        const targetStorePath = path.resolve(dest, `${name}.js`);
        const targetTypePath = path.resolve(dest, `types.js`);

        writeToFile(targetStorePath, storeResult);
        writeToFile(targetTypePath, typesResult);
    }
}


module.exports = {
    createProjectAction,
    addComponentAction,
    addPageAndRouteAction,
    addStoreAction
}
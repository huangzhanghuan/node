const program = require('commander')
const {
    createProjectAction,
    addComponentAction,
    addPageAndRouteAction,
    addStoreAction
} = require('./action')

const createCommand = () =>{
    program
        .command('create <project> [others...]')
        .description('clone repository into a folder')
        .action(createProjectAction)
    program
        .command('addcpn <name>')
        .description('add vue component, 例如 learn_cli addcpn Helloworld [-d src/components]')
        .action((name) => {
            addComponentAction(name, program.dest || 'src/components')
        });
    program
        .command('addpage <page>')
        .description('add vue page and router config, 例如: why addpage Home [-d src/pages]')
        .action((page) => {
            addPageAndRouteAction(page, program.dest || `src/pages/${page}`);
        })
    program
        .command('addstore <store>')
        .description('add vue page and router config, 例如: why addstore Home [-d src/pages]')
        .action((store) => {
            addStoreAction(store, program.dest || `src/store/modules/${store}`);

        })
}

module.exports = createCommand
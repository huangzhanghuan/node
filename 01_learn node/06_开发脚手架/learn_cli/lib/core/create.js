const program = require('commander')
const {
    createProjectAction,
    addCpnAction
} = require('./action')

const createCommand = () =>{
    program
        .command('create <project> [others...]')
        .description('clone repository into a folder')
        .action(createProjectAction)
    
     program
        .command('addcpn <name>')
        .description('add vue component, 例如 learn_cli addcpn Helloworld -d src/components')
        .action(addCpnAction)
}

module.exports = createCommand
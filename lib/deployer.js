'use strict';

const _ = require('axios').default
const chalk = require('chalk')


module.exports = function (args){
    const url = "https://api.hostman.com/hook/" + args.hash
    
    const info = chalk.green("INFO")
    const error = chalk.red("ERROR")
    const help = chalk.blue("HELP")
    return _.get(url).catch((err)=>{
        console.log(error+" Request Failed!")
        throw new Error(err)   
    }).then(
        console.log(info+" Request Done.")
    )
}
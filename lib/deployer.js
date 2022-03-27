'use strict';

const _ = require('axios').default
const chalk = require('chalk')


module.exports = function (args){
    const url = "https://api.hostman.com/hook/" + args.hash
    
    const info = chalk.Green("INFO")
    const error = chalk.Red("ERROR")
    const help = chalk.Blue("HELP")
    return _.get(url).catch((err)=>{
        console.log(error+" Request Failed!")
        throw new Error(err)   
    }).then(
        console.log(info+" Request Done.")
    )
}
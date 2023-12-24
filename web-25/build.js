var path = require("path")
module.exports = { }
module.exports.entry = path.resolve("code", "main.ts")

module.exports.output = { }
module.exports.output.filename = "final.js"
module.exports.output.path = path.resolve("public")

module.exports.module = { }
module.exports.module.rules = [ ]
var language  = { }
language.test = /ts$/
language.use  =  "ts-loader",  
language.exclude = /node_modules/
module.exports.module.rules.push(language)
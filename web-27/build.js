var path = require("path")
module.exports = { }
module.exports.entry = path.resolve("code", "multiple.js")
module.exports.output = { }
module.exports.output.path = path.resolve("public")        //destination folder to store the output//
module.exports.output.filename = "finalmultiple.js"                // name of the output file//
module.exports.module = { }
module.exports.module.rules = [
	{
		test: /\.js$/,                          //which file that is .js type, we will use barbel-loader to convert the entry to the destination//
		use: {
			loader: "babel-loader",
			options: {
				presets: [
				"@babel/preset-env", 
				"@babel/preset-react"]
			}
		},
		exclude: /node_modules/,
	}
]
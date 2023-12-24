var mongo = require("mongodb")
var source = "mongodb://127.0.0.1"
show()

async function show() {
  var cn = await mongo.MongoClient.connect(source)
  var data = await cn.db("shop")
                     .collection("staff")
                     .find()
                     .toArray()
  await cn.close()
  console.log(data)
}

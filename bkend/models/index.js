const dbconfig = require("../config/dbconfig.js") //db configuration

const mongoose = require("mongoose")

mongoose.Promise = global.Promise;

const db = {}

db.mongoose = mongoose
db.url = dbconfig.url;
db.data = require("./models.js")(mongoose)

module.exports = db
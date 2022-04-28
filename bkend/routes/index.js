module.exports = app => {
    const controllers = require("../controllers/controller.js")

    var router = require("express").Router()
    router.post("/create-new" ,  controllers.create)
    app.use("/api", router)
    
}
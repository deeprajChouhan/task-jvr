const express = require("express")

const app = express()

const cors = require("cors")
let corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const db= require("./models")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) // URL parser
    .then(() => {
        console.log("mydb connected")
    })
    .catch(err => {
        console.log(err)
        process.exit()
    })



app.get("/" , (req , res) => {
    res.json("bkend server" , db)
})

require("./routes/index.js")(app)

const PORT = process.env.PORT || 8000;

app.listen(PORT , () => {
    console.log("server running on port " + PORT)
})
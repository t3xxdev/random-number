import random from "random"
import express from "express"
const app = express()
const port = process.env.PORT || 8080

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index", {randomNum: null})
})

app.post("/", (req, res) => {
    let fromNum = parseInt(req.body.from, 10)
    let toNum = parseInt(req.body.to, 10)

    if (Number.isInteger(fromNum) && Number.isInteger(toNum)) {
        let randomNum = random.int(fromNum, toNum)

        res.render("index", { randomNum: randomNum })
    } else {
        res.status(400).send("Invalid input values. Please provide valid integers for 'from' and 'to'.")
    }
})

app.listen(port, () => { console.log(`Server listening on http://localhost:${port}`)})
"use strict"
const express = require("express")
const app = express()
const { router } = require("./src/router/router")
const port = process.env.PORT || 3000

// to access url encoded request to read the arguments easily
app.use(express.urlencoded({
    extended: true
})).listen(port)

app.use("/api", router)

// get requests
app.get('/', (req, res) => {
    res.sendFile('./src/pages/home.html',{root: __dirname})
})



// redirect

app.use((req, res) => {
    res.redirect('/')
})
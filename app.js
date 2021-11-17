// 1. IMPORTACIONES

const express = require("express")
const app = express()

require("dotenv").config()




// 2. MIDDLEWARES

app.use(express.static('public'))





// 3. RUTAS


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})


app.get("/works", (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})






// 4. SERVIDOR

app.listen(process.env.PORT, () => {
	console.log(`Servidor activo en puerto ${process.env.PORT}`)
})


const express = require ("express")
const app = express()

const path = require("path")
const http = require("http")
const {Server} = require("socket.io")
const { Socket } = require("engine.io")


const server = http.createServer(app)

const io = new Server(server)
app.use(express.static(path.resolve("")))

io.on("connet",(socket) => {

})
 
app.get("/", (req,res) => {
    return res.sendFile("index.html")
})

server.listen(5147,() => {
    console.log("port is connected in to 5147")
})

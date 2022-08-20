const express=require("express")
const handlers=require("./express.js")

const app=express();
app.use(express.json())

app.get("/movie",handlers.getMovie)
app.use(handlers.validator)
app.post("/movies",handlers.registerMovie)

app.listen(8080)

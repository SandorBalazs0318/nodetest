import express from "express"
const app = express();
const Port = 3000;
app.use(express.static(public));

app.get("/", (res) => {
    res.send("Hi there")
});

app.get("/express", (res) => {
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
});

app.get("/greeting", (res) => {
    res.send("Hello, Sándor Balázs");
});

app.get("/nodejs", (res) => {
    res.send( "A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})


app.listen(Port);
const crud = require("./public/crud");
const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser")

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", function (req, res) {
    res.render("index");
})

app.get("/cadastro", function (req, res) {
    res.render('cadastro')
})

app.post("/cadastro", function (req, res) {
    let user_e = req.body.user_e
    let user_p = req.body.user_p
    crud.inserir(user_e, user_p)
    res.render('cadastro')
})

app.get("/sobre", function (req, res){
    res.render('sobre')
})

app.get("/jogos", async function(req, res){
    const result = await crud.mostrar();
    res.render('jogos', {foda:result})
})

app.listen(3000, function() {
    console.log("Server is running");
})

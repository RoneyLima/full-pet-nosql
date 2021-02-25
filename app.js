const express = require('express')
const app = express()
const mongoose = require("mongoose");

// const mysql = require('mysql')

require('./src/db/nosql');
require('./src/modelos/Produtos')
const Products = mongoose.model('produtos')


// Para usar a pasta public 
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'EJS')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password: '',
//     database:'loja-full-pet'
// })

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extend:true}))
        app.use(bodyParser.json())

//conexao com o Banco para todo o documento

app.get("/", (req,res) =>{
    res.render('home');
     
    })


app.get("/produtos", async (req,res) =>{
    
    // Comando SQL para manusear o BD
    // connection.query("select * from tb_produtos", (error, result) => {
    // //     res.render("pages/produtos", { dados: result })
    // })
    const prodResponse = await Products.find();
    const prodJson = await prodResponse;
  
    // res.json(prodJson);
    res.render("pages/produtos", { dados: prodJson })

})

app.get("/produtos", (req,res) =>{
    
    res.render('pages/produtos'); 
})


app.get("/cadastro", (req,res) =>{
    res.render('pages/cadastro'); 
    })


app.listen(1900, () =>{
    console.log('O Servidor subiu na porta 1900')
})

//Mongoose é o intermediador entre o Node e o Mongo
//arquivo de configuração para conectar com BD
const mongoose = require('mongoose')

function connection(){ 
    mongoose
    .connect("mongodb://localhost/full-pet", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Conectado com sucesso!");
        })
    .catch((error)=>{
        console.log(`Erro de conexão ${error}`);
    })
}

module.exports = connection();
const mongoose = require("mongoose")
const Esquema = mongoose.Schema

//Criando Schema de dados
const ProdutoSc = new Esquema({

    id_produto: { type: String, required: true },
    marca:{ type: String, required: true },
    setor:{ type: String, required: true },
    descricao:{ type: String, required: true },
    valor_antigo:{ type: String, required: true },
    valor_atual:{ type: String, required: true },
    img_nome:{ type: String, required: true },
          // id_produto: { type: String, required: true },
        // marca: { type: String, required: true },
        // setor: { type: String, required: true },
        // descricao: { type: String, required: true },
        // valor_antigo: { type: String, required: true },
        // valor_atual: { type: String, required: true },
        // img_nome: { type: String, required: true }
      })

mongoose.model('produtos', ProdutoSc)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

/* Métodos HTTP
   get    -> Trazer recurso
   post   -> Enviar recurso
   put    -> Editar recurso
   delete -> Deletar recurso

   Tipos de parâmetros:
   Query Params: Maior parte das vezes usado no método GET, são incorporados na URL. request.query (Filtros, ordenação, paginação, ...)
   Route Params: Maior parte das vezes usado no método POST e DELETE, são incorporados como rotas na URL.  request.params (Identificar um recurso na alteração ou remoção) 
   Body: Maior parte das vezes usado no método POST e PUT, incorporado dentro do body da requisição (JSON). request.body (Dados para criação ou alteração de um registro)

   MongoDB (Não-relacional)
*/

const app = express();

mongoose.connect('mongodb+srv://wallace:7Q43rxg7@cluster0.spp2p.mongodb.net/week10?retryWrites=true&w=majority')

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(routes);


// porta 3333 do localhost
app.listen(3333);
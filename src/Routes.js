const express = require('express');
const routes = express.Router();
const ImovelController = require('./controllers/ImovelController');

routes.get('/imoveis',ImovelController.index);
routes.post('/adicionar',ImovelController.store);
routes.get('/imovel/:_id',ImovelController.detail);
routes.delete('/deletar/:_id',ImovelController.delete);
routes.put('/atualizar',ImovelController.update);

module.exports = routes;
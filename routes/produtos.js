const express = require('express');
const router = express.Router();

// RETONAR TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos'
    });
});

// INSERE UM PRODUTO
router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }
    
    res.status(201).send({
        mensagem: 'Produto foi criado',
        produtoCriado: produto
    });
});

// RETORNA UM UNICO PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: 'Detalhes do produto',
        id: id
    });
});

// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado'
    });
});

// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto deletado'
    });
});

module.exports = router;
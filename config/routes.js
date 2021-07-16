const express = require('express')
const routes = express.Router()


let db = [
    { '1' : { Nome: 'Cliente 1', Idade: '20' } },
    { '2' : { Nome: 'Cliente 2', Idade: '30' } },
    { '3' : { Nome: 'Cliente 3', Idade: '40' } }
]

// GET - SELECIONAR DADOS
// POST - INSERIR DADOS
// PUT - MODIFICAR DADOS
// DELETE - DELETAR DADOS

// Buscar Dados e inserir dados
routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
   const body = req.body

   if(!body)
   return res.status(400).end()

   db.push(body)
   return res.json(body)
   
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
        return item    
    })
    db = newDB
    return res.send(newDB)
})

module.exports = routes
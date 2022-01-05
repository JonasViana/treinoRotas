const res = require('express/lib/response')

let produtoController = {
  viewForm: (req, res) => {
    return res.render('produto')
  },
  salvarForm: (req, res) => {
    let { nomeProduto, precoProduto } = req.body

    res.redirect('/produtos/sucesso')
  },
  sucesso: (req, res) => res.render('sucesso')
}

module.exports = produtoController

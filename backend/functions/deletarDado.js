function deletarDado(req,res){
    res.send(`Dado de id ${req.params.id} deletado`)
}

module.exports = deletarDado
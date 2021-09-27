function editarDado(req,res){
    res.send('Dado editado no id ' + req.params.id)
}

module.exports = editarDado
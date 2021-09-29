const db = require('../db.json')

function obterDados(req,res){
    res.send(db.cars)
}

module.exports = obterDados
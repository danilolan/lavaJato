const db = require('../db.json')

function salvarDado(req,res){
    const id = db.cars.lastIndexOf()
    const car = req.body
    car.append(id)
   // res.send('Objeto foi salvo')
    res.send(car)
}

module.exports = salvarDado
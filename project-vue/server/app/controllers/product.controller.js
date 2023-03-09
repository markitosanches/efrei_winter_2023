const db = require('../models')
const Product = db.products
const OP = db.Sequelize.Op

exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
}

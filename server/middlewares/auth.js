const {tokenVerifier} = require('../helpers/jwt')
const {Product,Order,Shopping_Cart,Line_Item} = require('../models')

function authen(req,res,next){
    let access_token = req.headers.access_token;

    if(access_token){
        try{
            const decoded = tokenVerifier(access_token)
            console.log(decoded)
            req.UserData = decoded
            next()
        }catch(err){
            res.status(401).json({
                message:'User data is not authenticated'
            })
        }
    }else{
        res.status(404).json({
            message:"Token not found!"
        })
    }
}

function authorProduct(req,res,next){
    const id = +req.params.id;
    const UserId =+req.UserData.id;
    Product.findByPk(id)
    .then(products => {
        if (!products) {
            res.status(404).json({
                message: "Product not found"
            })
        } else if (products.UserId !== UserId) {
            res.status(401).json({
                message: "User is not authorized"
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
}

function authorOrder(req,res,next){
    const id = +req.params.id;
    const UserId =+req.UserData.id;
    console.log(UserId)
    Order.findByPk(id)
    .then(orders => {
        if (!orders) {
            res.status(404).json({
                message: "Order not found"
            })
        } else if (orders.UserId !== UserId) {
            res.status(401).json({
                message: "User is not authorized"
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
}

function authorCart(req,res,next){
    const id = +req.params.id;
    const UserId =+req.UserData.id;
    Shopping_Cart.findByPk(id)
    .then(carts => {
        if (!carts) {
            res.status(404).json({
                message: "Shopping Cart not found"
            })
        } else if (carts.UserId !== UserId) {
            res.status(401).json({
                message: "User is not authorized"
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
}

function authorItem(req,res,next){
    const id = +req.params.id;
    const UserId =+req.UserData.id;
    Line_Item.findByPk(id)
    .then(items => {
        if (!carts) {
            res.status(404).json({
                message: "Line Item Cart not found"
            })
        } else if (items.UserId !== UserId) {
            res.status(401).json({
                message: "User is not authorized"
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
}

module.exports = {
    authen,
    authorProduct,
    authorOrder,
    authorCart,
    authorItem,
}
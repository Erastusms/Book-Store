const {Shopping_Cart} = require('../models')

class cartController{
    static async show(req,res){
        try{
            let carts= await Shopping_Cart.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json(carts)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async showById(req,res){
        try{
            let id = +req.params.id;
            let carts = await Shopping_Cart.findByPk(id)
            res.status(200).json(carts)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async showByUser(req,res){
        try{

        }catch(err){
            res.status(500).json(err)
        }
    }

    static async create(req,res){
        try{
            const{status,UserId}=req.body
            let carts = await Shopping_Cart.create({
                status,UserId
            })
            res.status(200).json(carts)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async update(req,res){
        try{
            let id = +req.params.id;
            const {status}=req.body
            let carts = await Shopping_Cart.update({
                status
            },{
                where:{id}
            })
            carts[0]===1?res.status(200).json({
                message:"data has been update"
            }):
            res.status(400).json({
                message:`id ${id} not found!`
            })
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async delete(req,res){
        try{
            let id = +req.params.id;
            let carts = await Shopping_Cart.destroy({
                where:{id}
            })
            carts===1 ? res.status(200).json({
                message:'data has been delete!'
            }):
            res.status(400).json({
                message:`id ${id} not found!`
            })
        }catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = cartController
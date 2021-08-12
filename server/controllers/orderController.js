const {Order} = require('../models')
const { Op } = require("sequelize")

class orderController{
    static async show(req,res){
        try{
            let orders = await Order.findAll({
                order:[
                    ['UserId', 'ASC']
                ]
            })
            res.status(200).json(orders)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async showById(req,res){
        try{
            let UserId = +req.params.UserId;
            let orders = await Order.findOne({
                where:{UserId}
            })
            res.status(200).json(orders)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async create(req,res){
        try{
            const{name,subtotal,total_qty,city,address,UserId}=req.body
            let orderName = name;
            console.log(orderName)
            let findName = await Order.findAll()
            let fN = findName.map(fn=>{
                return fn.name
            })
            let flag =0;
            fN.forEach(fn=>{
                if(fn===name){
                flag +=1
                }
            })
            if(flag!==0){
                res.status(403).json({
                    message:"name already exist"
                })
            }else{
                let orders = await Order.create({
                    name:orderName,subtotal,total_qty,city,address,UserId
                })
                res.status(200).json({
                    message:'data has been create'
                })
            }
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async update(req,res){
        try{
            let idO = +req.params.id;
            const {name,subtotal,total_qty,city,address,UserId}=req.body
            console.log('1')

            let findName = await Order.findAll({
                where:{id:{[Op.ne]:idO}}
            })
            console.log('ok')
            let fN = findName.map(fn=>{
                return fn.name
            })
            console.log('2')
            let flag =0;
            fN.forEach(fn=>{
                if(fn===name){
                flag +=1
                }
            })
            console.log('3')
            if(flag!==0){
                res.status(403).json({
                    message:"name already exist"
                })
            }else{
            let orders = await Order.update({
                name,subtotal,total_qty,city,address,UserId
            },{
                where:{id:idO},
                individualHooks:true
            })
            res.status(200).json({
                message:'data has been update'
            })
        }
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async delete(req,res){
        try{
            let id = +req.params.id;
            let orders = await Order.destroy({
                where:{id}
            })
            orders=== 1 ? res.status(200).json({
                message:'data has been delete!'
            }):
            res.status(404).json({
                message:`id ${id} not found!`
            })
        }catch(err){
            res.status(500).json(err)
        }
    }

}

module.exports = orderController
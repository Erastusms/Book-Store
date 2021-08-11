const {Order} = require('../models/order')

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
            console.log('bc1')
            let discount=0
            if(+total_qty>=2){
                discount = (+subtotal)-(+subtotal*5/100)
                console.log('bc11')
            }else{
                discount=0;
                console.log('bc11')
            }
            console.log('bc2')
            let tax = (+subtotal)*10/100;
            let total_due = (+subtotal)+(discount)+(tax)
            console.log(total_due)
            let payt_trx_number=`9999${total_qty}${total_due}`
            console.log(payt_trx_number)
            let status="open"
            console.log('bc3')
            let orders = await Order.create({
                name,subtotal,discount,tax,total_due,total_qty,payt_trx_number,city,address,status,UserId
            })
            res.status(200).json(orders)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async update(req,res){
        try{
            let id = +req.params.id;

        }catch(err){
            res.status(500).json(err)
        }
    }

    static async delete(req,res){
        try{
            let id = +req.params.id;

        }catch(err){
            res.status(500).json(err)
        }
    }

}

module.exports = orderController
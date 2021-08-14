const{Product,Products_Image}= require('../models')

class prodController{
    static async show(req,res){
        try{
            let products = await Product.findAll({
                include:[Products_Image]
                ,order: [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async showById(req,res){
        try{
            let id = +req.params.id;
            let products = await Product.findOne({
                include:[Products_Image],
                where:{id}
            })

            let result = products.views+1
            let prod = await Product.update({
                views:result
            },{
                where:{id}
            })
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async create(req,res){
        try{
            const UserId=+req.UserData.id
            const{name,desc,price,stock,expire,weight,category,publisher,condition}=req.body
            let products = await Product.create({
                name,desc,price,stock,expire,weight,category,publisher,condition,UserId
            })
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }
    
    static async update(req,res){
        try{
            let id = +req.params.id;
            const{name,desc,price,stock,expire,weight,category,publisher,condition}=req.body
            let products = await Product.update({
                name,desc,price,stock,expire,weight,category,publisher,condition
            },{
                where:{id}
            })
            console.log(products[0])
            products[0]===1?res.status(200).json({
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
            let products = await Product.destroy({
                where:{id}
            })
            products===1 ? res.status(200).json({
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

module.exports = prodController
const {User} = require('../models');
const{decrypter}= require('../helpers/endes')

class userController{
    static async show(req,res){
        try{
            let users = await User.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json(users)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async register(req,res){
        console.log(req.body)
        try{
            const {name,email,password,salt,birthdate,gender,type} =req.body
            let mail = email.toLowerCase();
            console.log(mail)
            let findEmail = await User.findOne({
                where:{email}
            })

            console.log(findEmail)

            if(findEmail){
                res.status(403).json({
                    message: "Email already exist!"
                })
            }else{
                // console.log("oke")
                let user = await User.create({
                    name,email,password,salt,birthdate,gender,type
                })
                res.status(201).json(user)
            }
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async login(req,res){
        try{
            const{email,password}=req.body
            let user = await User.findOne({
                where:{email}
            })
            if(user){
                if(decrypter(password,user.password)){
                    res.status(200).json({
                        message: "success"
                    })
                }else{
                    res.status(403).json({
                        message:"password is Invalid!"
                    })
                }
            }else{
                res.status(404).json({
                    message:"user not found!"
                })
            }
        }catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = userController
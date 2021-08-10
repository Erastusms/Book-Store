const {User} = require('../models');
const{decrypter,encrypter}= require('../helpers/endes')
const {tokenGenerator} = require('../helpers/jwt')
const { Op } = require("sequelize")

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
            let findEmail = await User.findOne({
                where:{email}
            })


            if(findEmail){
                res.status(403).json({
                    message: "Email already exist!"
                })
            }else{
                // console.log("oke")
                let user = await User.create({
                    name,email:mail,password,salt,birthdate,gender,type
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
                    let access_token = tokenGenerator(user)
                    res.status(200).json({
                        access_token
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

    static async update(req,res){
        try{
        let idP = +req.params.id;
        const {name,email,salt,birthdate,gender,avatar,type} =req.body;
        let mail = email.toLowerCase();
        let findEmail = await User.findAll({
            where:{id:{[Op.ne]:idP}}
        })
        let fE = findEmail.map(fe=>{
            return fe.email
        })

        let flag =0;
        fE.forEach(fe=>{
            if(fe===mail){
                flag +=1
            }
        })
        if(flag!==0){
            res.status(403).json({
                message: "Email already exist!"
            })
        }else{
            let result =await User.update({
                name,email:mail,salt,birthdate,gender,avatar,type
            },{
                where:{id:idP}
            })
            res.status(200).json({
                message:"success"
            })
        }
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async updatePwd(req,res){
        try{
            let id = +req.params.id;
            const {password,newPwd,verPwd}=req.body
            console.log(req.body)
            let user = await User.findOne({
                where:{id}
            })
            console.log(newPwd)
            if(decrypter(password,user.password)){
                
                if(newPwd===verPwd){
                   let newPassword = encrypter(newPwd) 
                   console.log(newPassword)
                   let upPwd=await User.update({
                    password:newPassword
                   },{
                       where:{id}
                   })
                   res.status(200).json({
                       message:"password has been update"
                   })
                }else{
                    res.status(403).json({
                        message:"new password is wrong!"
                    })
                }
            }else{
                res.status(403).json({
                    message:"password is Invalid!"
                })
            }
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async delete(req,res){
        try{
            const id = req.params.id;
            let result =await User.destroy({
                where:{id}
            })
            result === 1 ? res.status(200).json({
                message:`id ${id} has been delete`
            }):
            res.status(404).json({
                message:"id is not found!"
            })
        }catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = userController
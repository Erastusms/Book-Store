const {tokenVerifier} = require('../helpers/jwt')

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

// function author(req,res,next){
//     console.log('author')
//     const id = +req.params.id;
//     const UserId =+req.UserData.id;
//     try{
    
//         let products=Product.findByPk(id)

//         if(!products){
//             res.status(404).json({
//                 message:'Product not found'
//             })
//         }else if(products.UserId !== UserId){
//             res.status(401).json({
//                 message:"User is not authorized"
//             })
//         }else{
//             next()
//         }
//     }catch(err){
//         res.status(500).json(err)
//     }
// }

module.exports = {authen}
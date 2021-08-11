const jwt = require('jsonwebtoken')
const secretCode = process.env.SECRET_CODE;

const tokenGenerator = (user) =>{
    const {name,email,salt,birthdate,gender,type} =user
    let token = jwt.sign({
        name,email,salt,birthdate,gender,type
    },secretCode)
    return token
}

const tokenVerifier = token =>{
    let decode = jwt.verify(token,secretCode)
    return decoded
}

module.exports = {
    tokenGenerator,
    tokenVerifier
}
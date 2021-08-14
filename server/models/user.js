'use strict';
const {
  Model
} = require('sequelize');
const {encrypter} =require('../helpers/endes')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product)
      User.hasMany(models.Shopping_Cart)
      User.hasMany(models.Order)
    }
  };
  User.init({
    name: DataTypes.STRING(20),
    email: DataTypes.STRING(55),
    password: DataTypes.STRING,
    state: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING(6),
    avatar: DataTypes.STRING,
    type: DataTypes.STRING(10)
  }, {
    hooks:{
      beforeCreate(user,options){
        user.password = encrypter(user.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
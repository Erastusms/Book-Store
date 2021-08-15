"use strict";
const { Model } = require("sequelize");
const { encrypter } = require("../helpers/endes");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product);
      User.hasMany(models.Shopping_Cart);
      User.hasMany(models.Order);
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING(20),
        validate:{
          notEmpty:{
            message: "name cannot be empty!"
          }
        }
      },
      email: {
        type: DataTypes.STRING(55),
        validate:{
          notEmpty:{
            message: "email cannot be empty!"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message: "password cannot be empty!"
          }
        }
      },
      state: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message: "state cannot be empty!"
          }
        }
      },
      birthdate: {
        type: DataTypes.DATE,
        validate:{
          notEmpty:{
            message: "birthdate cannot be empty!"
          }
        }
      },
      gender: {
        type: DataTypes.STRING(6),
        validate:{
          notEmpty:{
            message: "gender cannot be empty!"
          }
        }
      },
      avatar: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:{
            message: "avatar cannot be empty!"
          }
        }
      },
      type: {
        type: DataTypes.STRING(10),
        validate:{
          notEmpty:{
            message: "type cannot be empty!"
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate(user, options) {
          user.password = encrypter(user.password);
          user.type = "user";
          // user.avatar = "https://www.wjtv.com/wp-content/uploads/sites/72/2019/05/blank-2017_1559245575865_89917888_ver1.0.jpg";
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

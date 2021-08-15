'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Products_Image)
      Product.hasMany(models.Line_Item)
      Product.belongsTo(models.User)
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING(100),
      validate:{
        notEmpty:{
          message: "name cannot be empty!"
        }
      }
    },
    desc: {
      type: DataTypes.STRING(3000),
      validate:{
        notEmpty:{
          message: "desc cannot be empty!"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "price cannot be empty!"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "stock cannot be empty!"
        }
      }
    },
    expire: {
      type: DataTypes.DATE,
      validate:{
        notEmpty:{
          message: "expire cannot be empty!"
        }
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "weight cannot be empty!"
        }
      }
    },
    category: {
      type: DataTypes.STRING(50),
      validate:{
        notEmpty:{
          message: "category cannot be empty!"
        }
      }
    },
    publisher: {
      type: DataTypes.STRING(50),
      validate:{
        notEmpty:{
          message: "publisher cannot be empty!"
        }
      }
    },
    condition: {
      type: DataTypes.STRING(15),
      validate:{
        notEmpty:{
          message: "condition cannot be empty!"
        }
      }
    },
    total_sold: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "total_sold cannot be empty!"
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "rating cannot be empty!"
        }
      }
    },
    views: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "views cannot be empty!"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "name cannot be empty!"
        }
      }
    }
  }, {
    hooks:{
      beforeCreate(product,options){
        product.views=0;
        product.rating=0;
        product.total_sold=0;
      }
    },
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
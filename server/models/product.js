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
    name: DataTypes.STRING(100),
    desc: DataTypes.STRING(3000),
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    expire: DataTypes.DATE,
    weight: DataTypes.INTEGER,
    category: DataTypes.STRING(50),
    publisher: DataTypes.STRING(50),
    condition: DataTypes.STRING(15),
    total_sold: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
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
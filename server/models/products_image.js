'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products_Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products_Image.belongsTo(models.Product)
    }
  };
  Products_Image.init({
    filename: {
      type: DataTypes.STRING(100),
      validate:{
        notEmpty:{
          message: "filename cannot be empty!"
        }
      }
    },
    filesize: {
      type: DataTypes.STRING(100),
      validate:{
        notEmpty:{
          message: "filesize cannot be empty!"
        }
      }
    },
    filetype: {
      type: DataTypes.STRING(100),
      validate:{
        notEmpty:{
          message: "filetype cannot be empty!"
        }
      }
    },
    primary: {
      type: DataTypes.BOOLEAN,
      validate:{
        notEmpty:{
          message: "primary cannot be empty!"
        }
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "ProductId cannot be empty!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Products_Image',
  });
  return Products_Image;
};
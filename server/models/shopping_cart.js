'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shopping_Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shopping_Cart.hasMany(models.Line_Item)
      Shopping_Cart.belongsTo(models.User)
    }
  };
  Shopping_Cart.init({
    status: DataTypes.STRING(15),
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shopping_Cart',
  });
  return Shopping_Cart;
};
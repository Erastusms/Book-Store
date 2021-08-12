'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Line_Item)
      Order.belongsTo(models.User)
    }
  };
  Order.init({
    name: DataTypes.STRING(25),
    subtotal: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    tax: DataTypes.FLOAT,
    total_due: DataTypes.FLOAT,
    total_qty: DataTypes.INTEGER,
    payt_trx_number: DataTypes.STRING,
    city: DataTypes.STRING(15),
    address: DataTypes.STRING(500),
    status: DataTypes.STRING(15),
    UserId: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate(order,options){
        let qty = +order.total_qty
          if(qty>=2){
            order.discount = (+order.subtotal*5/100)
          }else{
            order.discount=0;
          }
        
          order.tax = ((+order.subtotal)-(+order.discount))*10/100;
          order.total_due =(+order.subtotal)-(+order.discount)+(+order.tax)
          order.payt_trx_number=`${order.UserId}9999${order.total_qty}${order.total_due}`
          order.status='open'
      },
        beforeUpdate(order,options){
          let qty = +order.total_qty
          if(qty>=2){
            order.discount = (+order.subtotal*5/100)
          }else{
            order.discount=0;
          }
        
          order.tax = ((+order.subtotal)-(+order.discount))*10/100;
          order.total_due =(+order.subtotal)-(+order.discount)+(+order.tax)
          order.payt_trx_number=`${order.UserId}9999${order.total_qty}${order.total_due}`
          order.status='open'
        }
    },
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
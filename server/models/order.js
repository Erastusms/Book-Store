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
    name: {
      type: DataTypes.STRING(25),
      validate:{
        notEmpty:{
          message: "name cannot be empty!"
        }
      }
    },
    subtotal: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "subtotal cannot be empty!"
        }
      }
    },
    discount: {
      type: DataTypes.FLOAT,
      validate:{
        notEmpty:{
          message: "discount cannot be empty!"
        }
      }
    },
    tax: {
      type: DataTypes.FLOAT,
      validate:{
        notEmpty:{
          message: "tax cannot be empty!"
        }
      }
    },
    total_due: {
      type: DataTypes.FLOAT,
      validate:{
        notEmpty:{
          message: "total_due cannot be empty!"
        }
      }
    },
    total_qty: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "total_qty cannot be empty!"
        }
      }
    },
    payt_trx_number: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          message: "payt_trx_number cannot be empty!"
        }
      }
    },
    city: {
      type: DataTypes.STRING(15),
      validate:{
        notEmpty:{
          message: "city cannot be empty!"
        }
      }
    },
    address: {
      type: DataTypes.STRING(500),
      validate:{
        notEmpty:{
          message: "address cannot be empty!"
        }
      }
    },
    status: {
      type: DataTypes.STRING(15),
      validate:{
        notEmpty:{
          message: "status cannot be empty!"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message: "UserId cannot be empty!"
        }
      }
    }
  }, {
    hooks:{
      beforeCreate(order,options){
        let qty = +order.total_qty
          if(qty>2){
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
          if(qty>2){
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
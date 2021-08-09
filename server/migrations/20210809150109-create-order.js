'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      name: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(25)
      },
      subtotal: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.FLOAT
      },
      tax: {
        type: Sequelize.FLOAT
      },
      total_due: {
        type: Sequelize.FLOAT
      },
      total_qty: {
        type: Sequelize.INTEGER
      },
      payt_trx_number: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING(15)
      },
      address: {
        type: Sequelize.STRING(500)
      },
      status: {
        type: Sequelize.STRING(15)
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Line_Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING(15)
      },
      ProductId: {
        type: Sequelize.INTEGER
      },
      ShoppingCartId: {
        type: Sequelize.INTEGER
      },
      OrderId: {
        type: Sequelize.STRING(25)
      },
      uniqId: {
        type: Sequelize.STRING(30)
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
    await queryInterface.dropTable('Line_Items');
  }
};
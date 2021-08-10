'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
       {
        name:'Budi',
        email:'budi@mail.com',
        password:'123',
        salt:'',
        birthdate:new Date(),
        gender: 'Male',
        avatar: '',
        type:'admin',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:'Ani',
        email:'ani@mail.com',
        password:'123',
        salt:'',
        birthdate:new Date(),
        gender: 'Female',
        avatar: '',
        type:'user',
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};

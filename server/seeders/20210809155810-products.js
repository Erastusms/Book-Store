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
     await queryInterface.bulkInsert('Products', [
        {
          name:'Laskar Pelangi',
          desc:'Laskar Pelangi adalah novel pertama karya Andrea Hirata yang diterbitkan oleh Bentang Pustaka pada tahun 2005. Novel ini bercerita tentang kehidupan 10 anak dari keluarga miskin yang bersekolah (SD dan SMP) di sebuah sekolah Muhammadiyah di Belitung yang penuh dengan keterbatasan',
          price: 250000,
          stock:100,
          expire : new Date(),
          weight: 200,
          category: 'Novel',
          publisher:'Bentang Pustaka',
          condition:'New',
          total_sold:0,
          rating:0,
          views:0,
          UserId:1,
          createdAt:new Date(),
          updatedAt:new Date()
        },{
          name:'Ayat-Ayat Cinta',
          desc:'Ayat-Ayat Cinta adalah novel berbahasa Indonesia karangan Habiburrahman El Shirazy yang diterbitkan pertama kali pada tahun 2004 melalui penerbit Basmala dan Republika. Novel ini berisikan 418 halaman dan sukses menjadi salah satu novel fiksi terlaris di Indonesia yang dicetak sampai dengan 160 ribu eksemplar hanya dalam jangka waktu tiga tahun. Ayat Ayat Cinta juga merupakan pelopor karya sastra Islami yang sedang dalam masa kebangkitannya dewasa ini.',
          price: 200000,
          stock:100,
          expire : new Date(),
          weight: 200,
          category: 'Novel',
          publisher:'Republika',
          condition:'New',
          total_sold:0,
          rating:0,
          views:0,
          UserId:1,
          createdAt:new Date(),
          updatedAt:new Date()
        }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};

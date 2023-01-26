'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Clinics',[ 
      { name: "Grady",
        location: "Atl", 
        size: "2000",
        createdAt: new Date(), 
        updatedAt: new Date(), 
      }, 
      { name: "Emory",
        location: "Decatur", 
        size: "2000",
        createdAt: new Date(), 
        updatedAt: new Date(), 
      }, 
      
       
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Clinics", null, {});
  }
};

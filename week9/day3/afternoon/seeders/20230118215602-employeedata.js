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
    await queryInterface.bulkInsert('Employees',[ 
      { firstname: "john",
        lastname: "smith", 
        clinicId: "1",
        createdAt: new Date(), 
        updatedAt: new Date(), 
      }, 
      { firstname: "jane",
        lastname: "doe", 
        clinicId: "2",
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

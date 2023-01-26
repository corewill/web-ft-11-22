'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Pet: {
        type: Sequelize.INTEGER,
        ondelete: 'CASCADE',
        references: {
          model: 'Pets',
          key: 'id',
          as: 'pet',
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Owners');
  }
};
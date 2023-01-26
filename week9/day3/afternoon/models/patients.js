'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patients.belongsTo(models.Employees, {
        //on the employee table, where is the foreign key located? at 'clinicId'.
        foreignKey: 'employeeAssignedId'
      })
    }
  }
  Patients.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patients',
  });
  return Patients;
};
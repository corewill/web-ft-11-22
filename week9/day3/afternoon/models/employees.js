'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employees.belongsTo(models.Clinics, {
        //on the employee table, where is the foreign key located? at 'clinicId'.
        foreignKey: 'clinicId'
      })
      Employees.hasOne(models.Patients, {
        foreignKey: 'employeeAssignedId'
      })
    }
  }
  Employees.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    clinicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrollments = sequelize.define('Enrollments', {
    status: DataTypes.STRING
  }, {});
  Enrollments.associate = function (models) {
    Enrollments.belongsTo(models.People, {
      foreignKey: 'student_id'
    })
    Enrollments.belongsTo(models.Classes, {
      foreignKey: 'class_id'
    })
  };
  return Enrollments;
};
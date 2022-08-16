'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    start_date: DataTypes.DATEONLY
  }, {});
  Classes.associate = function (models) {
    Classes.hasMany(models.Enrollments, {
      foreignKey: 'class_id'
    })
    Classes.belongsTo(models.People, {
      foreignKey: 'docent_id'
    })
    Classes.belongsTo(models.Levels, {
      foreignKey: 'level_id'
    })
  };
  return Classes;
};
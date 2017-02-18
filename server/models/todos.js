'use strict'

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    task: DataTypes.STRING,
    urgency: {
      type: DataTypes.ENUM('high', 'medium', 'low'),
      allowNull: true

    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
  }, {
    paranoid: true,
    underscored: true
  });
  return Todo;
};

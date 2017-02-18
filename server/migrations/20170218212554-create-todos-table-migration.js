"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('Todos', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        task: Sequelize.STRING,
        urgency: {
          type: Sequelize.ENUM('high', 'medium', 'low'),
          allowNull: true

        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: Sequelize.DATE,
        deleted_at: Sequelize.DATE,
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Todos');
  }
};

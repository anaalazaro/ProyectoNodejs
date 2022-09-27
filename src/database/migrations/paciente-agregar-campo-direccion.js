'use strict';
const { sequelize } = require('../models/index');
const models = require('../models/index')

module.exports = {
 up: function (queryInterface, Sequelize) {
   return Promise.all(
    [
      queryInterface.addColumn('paciente','direccion',{
        type:Sequelize.STRING,
        allowNull:true,
      })
    ]
   )
  },
    down:function  (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

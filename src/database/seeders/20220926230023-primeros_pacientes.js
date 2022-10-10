'use strict';
const models = require('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {
 up:  function (queryInterface, Sequelize) {
   return Promise.all(
    [
      models.paciente.findOrCreate({
        where:{
          id: "1"
        },
        defaults: {
          nombre: "Lucas",
          apellido:"Menz",
          email:"Lucas@prueba.com",
          edad:"30",
          direccion:"calle falsa 1234",
          medicoId: 2,
          password: bcrypt.hashSync('password',10)
        }
      }),
      models.paciente.findOrCreate({
        where:{
          id: "2"
        },
        defaults: {
          nombre: "Analia",
          apellido:"jars",
          email:"Analia@prueba.com",
          edad:"20",
          direccion:"calle 1200",
          medicoId: 1,
          password: bcrypt.hashSync('password',10)
        }
      }),
      models.paciente.findOrCreate({
        where:{
          id: "3"
        },
        defaults: {
          nombre: "Mia",
          apellido:"js",
          email:"Mia@prueba.com",
          edad:"34",
          direccion:"calle falsa 1234",
          medicoId: 2,
          password: bcrypt.hashSync('password',10)
        }
      })
    ]
   )
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

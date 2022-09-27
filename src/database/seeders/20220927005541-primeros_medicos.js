'use strict';
const models = require('../models/index')
module.exports = {
  up:  function (queryInterface, Sequelize) {
    return Promise.all(
     [
       models.medico.findOrCreate({
         where:{
           id: "1"
         },
         defaults: {
           nombre: "Juan",
           apellido:"Andre",
           email:"juan@prueba.com",
           especialidad:"cirujano",
           tiempo_trabajando:5,
           
         }
       }),
       models.medico.findOrCreate({
         where:{
           id: "2"
         },
         defaults: {
           nombre: "Maria",
           apellido:"Cruz",
           email:"Maria@prueba.com",
           especialidad:"dermatologa",
           tiempo_trabajando:1,
         }
       }),
       models.medico.findOrCreate({
         where:{
           id: "3"
         },
         defaults: {
           nombre: "Adrian",
           apellido:"Suarez",
           email:"Adrian@prueba.com",
           especialidad:"ginecologo",
           tiempo_trabajando:10,
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

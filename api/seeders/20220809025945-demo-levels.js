module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Levels', [
      {
        desc_level: 'básico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_level: 'intermediário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_level: 'avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Levels', null, {})
  }
}

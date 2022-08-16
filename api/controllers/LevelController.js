const database = require('../models')

class LevelController {
  static async levelsList(req, res) {
    try {
      const levels = await database.Levels.findAll()
      return res.status(200).json(levels)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async searchLevelByID(req, res) {
    const { id } = req.params
    try {
      const level = await database.Levels.findOne({ where: { id: Number(id) } })
      return res.status(200).json(level)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createLevel(req, res) {
    const data = req.body
    try {
      const newLevel = await database.Levels.create(data)
      return res.status(201).json(newLevel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateLevel(req, res) {
    const updateData = req.body
    const id = Number(req.params.id)
    try {
      await database.Levels.update(updateData, { where: { id: id } })
      const updatedLevel = await database.Levels.findOne({ where: { id: id } })
      return res.status(200).json({ updatedLevel, message: 'Cadastro atualizado com sucesso' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteLevel(req, res) {
    const id = Number(req.params['id'])
    await database.Levels.destroy({ where: { id: id } })
    return res.status(200).json({ message: `O level de ID:${id} foi removido com sucesso` })
  }

}

module.exports = LevelController
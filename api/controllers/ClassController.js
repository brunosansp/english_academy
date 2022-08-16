const database = require('../models')

class ClassController {
  static async ClassesList(req, res) {
    try {
      const classes = await database.Classes.findAll()
      return res.status(200).json(classes)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async searchClassByID(req, res) {
    const id = req.params['id']
    try {
      const classByID = await database.Classes.findOne({ where: { id: Number(id) } })
      if (!classByID) return res.status(204).json({ message: 'Not found' })
      return res.json({
        statusCode: 200,
        classByID
      })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createClass(req, res) {
    const newClass = req.body
    try {
      await database.Classes.create(newClass)
      return res.status(201).json(newClass)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateClassByID(req, res) {
    const id = req.params['id']
    const updateData = req.body
    try {
      await database.Classes.update(updateData, { where: { id: Number(id) } })
      const updatedClass = await database.Classes.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedClass)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteClassByID(req, res) {
    const id = req.params['id']
    try {
      await database.Classes.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `Classe de id ${id} foi excluída` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ClassController
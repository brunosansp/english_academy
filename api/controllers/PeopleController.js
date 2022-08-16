const database = require('../models');

class PeopleController {
  static async listAllPeople(req, res) {
    try {
      const listPeople = await database.People.findAll();
      return res.status(200).send(listPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async searchPeopleById(req, res) {
    const { id } = req.params;
    try {
      const person = await database.People.findOne({ where: { id: Number(id) } });
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createPeople(req, res) {
    const data = req.body;
    try {
      const newPeople = await database.People.create(data);
      return res.status(201).json(newPeople);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updatePeople(req, res) {
    const updateData = req.body;
    const { id } = req.params;
    try {
      await database.People.update(updateData, { where: { id: Number(id) } });
      const updatedPeople = await database.People.findOne({ where: { id: Number(id) } });
      return res.status(200).json({ updatedPeople, message: 'Cadastro atualizado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deletePeople(req, res) {
    const { id } = req.params;
    await database.People.destroy({ where: { id: Number(id) } });
    return res.status(200).json({ message: `O id ${id} foi removido com sucesso.` });
  }

  static async searchOneEnrollmentByIDAndStudentID(req, res) {
    const { studentId, enrollmentId } = req.params
    try {
      const enrollment = await database.Enrollments.findOne({
        where: {
          id: enrollmentId,
          student_id: studentId
        }
      })
      return res.status(200).json(enrollment)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createEnrollment(req, res) {
    const { studentId } = req.params
    const { body } = req
    try {
      const newEnrollment = { ...body, student_id: Number(studentId) }
      await database.Enrollments.create(newEnrollment)
      return res.status(201).json(newEnrollment)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateEnrollment(req, res) {
    const { studentId, enrollmentId } = req.params
    const newData = req.body
    try {
      await database.Enrollments.update(newData, {
        where: {
          id: Number(enrollmentId),
          student_id: Number(studentId)
        }
      })
      const updatedEnrollment = await database.Enrollments.findOne({ where: { id: Number(enrollmentId) } })
      return res.status(200).json(updatedEnrollment)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteEnrollment(req, res) {
    const { studentId, enrollmentId } = req.params
    console.log(studentId, enrollmentId)
    try {
      await database.Enrollments.destroy({
        where: {
          id: Number(enrollmentId),
          student_id: Number(studentId)
        }
      })
      return res.status(200).json({ message: `Matrícula de id ${enrollmentId} excluída com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PeopleController
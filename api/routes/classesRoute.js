const { Router } = require('express');
const ClassController = require('../controllers/ClassController.js');

const router = new Router();
router
  .get('/classes', ClassController.ClassesList)
  .get('/classes/:id', ClassController.searchClassByID)

module.exports = router;
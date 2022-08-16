const { Router } = require('express');
const LevelController = require('../controllers/LevelController.js');

const router = new Router();

router
  .get('/levels', LevelController.levelsList)
  .post('/levels', LevelController.createLevel)
  .get('/levels/:id', LevelController.searchLevelByID)
  .put('/levels/:id', LevelController.updateLevel)
  .delete('/levels/:id', LevelController.deleteLevel)

module.exports = router;
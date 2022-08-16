const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');

const router = new Router();

router.get('/people', PeopleController.listAllPeople);
router.get('/people/:id', PeopleController.searchPeopleById);
router.post('/people', PeopleController.createPeople);
router.put('/people/:id', PeopleController.updatePeople);
router.delete('/people/:id', PeopleController.deletePeople);
router.get('/people/:studentId/enrollment/:enrollmentId', PeopleController.searchOneEnrollmentByIDAndStudentID)
router.post('/people/:studentId/enrollment', PeopleController.createEnrollment)
router.put('/people/:studentId/enrollment/:enrollmentId', PeopleController.updateEnrollment)
router.delete('/people/:studentId/enrollment/:enrollmentId', PeopleController.deleteEnrollment)

module.exports = router;
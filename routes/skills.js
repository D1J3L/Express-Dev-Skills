var express = require('express');
var router = express.Router();

// Require the controller that exports
// the Skills CRUD functions
var skillsCtrl = require('../controllers/skills');


// all actual paths start with "/skills"


// GET /skills
router.get('/', skillsCtrl.index);

// GET "/skills/new" - New Route
router.get('/new', skillsCtrl.new);

// GET /skills/:id - Show Route
router.get('/:id', skillsCtrl.show);

// POST "/skills" - Create Route
router.post('/', skillsCtrl.create);

// DELETE "/skills/:id" - Delete Route
router.delete('/:id', skillsCtrl.delete);

module.exports = router;

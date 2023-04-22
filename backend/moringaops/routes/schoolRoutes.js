const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schools/schoolController');

// Create a new school
router.post('/', schoolController.create);

// Retrieve all schools
router.get('/', schoolController.findAll);

// Retrieve a single school by id
router.get('/:id', schoolController.findOne);

// Update a school by id
router.put('/:id', schoolController.update);

// Delete a school by id
router.delete('/:id', schoolController.delete);

module.exports = router;

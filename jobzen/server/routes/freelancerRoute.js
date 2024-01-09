const express = require('express');
const router = express.Router();
const Freelancer = require('../controllers/freelancerController');

// GET all freelancers
router.get('/freelancer', Freelancer.getAllfreelancer);

// Create a new freelancer
router.post('/freelancer', Freelancer.createFreelancer);

// Update a freelancer by ID
router.put('/freelancer/:id', Freelancer.updateFreelancer);

// Delete a freelancer by ID
router.delete('/freelancer/:id', Freelancer.deleteFreelancer);

module.exports = router;
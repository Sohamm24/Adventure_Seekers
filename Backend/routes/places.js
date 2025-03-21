const express = require('express');
const router = express.Router();

// Sample data (you would typically fetch this from a database)
const places = [
    { id: 1, name: 'Eiffel Tower', location: 'Paris', description: 'A wrought-iron lattice tower.' },
    { id: 2, name: 'Statue of Liberty', location: 'New York', description: 'A symbol of freedom.' },
    // Add more places as needed
];

// GET all places
router.get('/', (req, res) => {
    res.json(places);
});



module.exports = router;

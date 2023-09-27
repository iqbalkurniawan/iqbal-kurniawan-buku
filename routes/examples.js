const express = require('express');
const router = express.Router();

const ExampleController = require('../controllers/ExampleController');

router.get('/', ExampleController.index);
router.get('/books', ExampleController.list);
router.get('/books/:id', ExampleController.list);
router.get('/books/jenis/:jenis', ExampleController.list);
router.put('/books/:id', ExampleController.update);
router.post('/books', ExampleController.simpan);
router.delete('/books/:id', ExampleController.delete);

module.exports = router;
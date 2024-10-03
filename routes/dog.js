// import modules and dependencies
import express from 'express';
import dogControllers from '../controllers/dog.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

const { getAllDogs, getDogById, addDogForm, addDog } = dogControllers;

// routes
router.get('/dogs', getAllDogs);
router.get('/dogs/:id', getDogById);
router.get('/add-dog', verifyToken, addDogForm);
router.post('/add-dog', addDog);

export default router;
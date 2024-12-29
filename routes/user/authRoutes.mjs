import express from 'express';
const router = express.Router()

import authControllers  from '../../controllers/userControllers/authControllers.mjs';

//user
router.get('/signup',authControllers.loadSignUp)


export default router
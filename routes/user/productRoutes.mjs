import express from 'express';
const router = express.Router()


import surfControllers from '../../controllers/userControllers/surfControllers.mjs';


router.get('/',surfControllers.landingPage)



export default router
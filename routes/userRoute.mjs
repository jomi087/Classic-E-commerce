import express from 'express';
const router = express.Router()


import userControllers  from '../controllers/userControllers/userControllers.mjs';

router.get('/',userControllers.landingPage)

router.get('*',userControllers.pageNotFound)


export default router
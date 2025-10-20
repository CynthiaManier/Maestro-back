import express from 'express';
import companyRoute from './companyRoute.js';
import genreRoute from './genreRouter.js';

const router = express.Router();


router.use('/api', companyRoute);
router.use('/api', genreRoute );

export default router;
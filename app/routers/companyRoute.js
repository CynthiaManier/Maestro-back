import express from 'express';
import companyController from '../controllers/companyController.js';

const companyRoute = express.Router();

// GET /api/admin/company
companyRoute.get('/admin/company', companyController.findAll)

// POST /api/company


// PATCH /api/company/:idCompany


// DELETE /api/company/:idCompany

export default companyRoute;
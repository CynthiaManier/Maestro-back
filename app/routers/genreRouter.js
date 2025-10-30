import express from 'express';
import genresController from '../controllers/genresController.js';

const genreRoute = express.Router();

// GET /api/genre à la place de /api/admin/genre
genreRoute.get('/genre', genresController.getAllGenres)

// POST /api/admin/genre
genreRoute.post('/admin/genre', genresController.addAGenre)

// PATCH /api/genre/:idCompany
genreRoute.patch('/admin/genre/:id', genresController.updateGenre)

// DELETE /api/genre/:idCompany
genreRoute.delete('/admin/genre/:id', genresController.deleteGenre)


export default genreRoute;
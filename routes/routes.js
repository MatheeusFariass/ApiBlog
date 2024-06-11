const express = require('express');
const router = express.Router();
const AutorController = require('../controllers/AutorController');
const PostController = require('../controllers/PostController')

router.get('/api/autor', AutorController.showAll); //mostra todos os autores
router.get('/api/autor/:id', AutorController.show); //mostra um autor através do id
router.post('/api/autor', AutorController.create); //cria um novo autor
router.put('/api/autor/:id', AutorController.update); //atualiza um autor através do id
router.delete('/api/autor/:id', AutorController.delete); //deleta uma autor através do id
router.get('/api/autor/:id/posts', AutorController.postsAutor); //recebe todos os posts de um autor

router.get('/api/post', PostController.showAll); //mostra todos os posts
router.get('/api/post/:id', PostController.show); //mostra um post através do id
router.post('/api/post', PostController.create); //cria um novo post
router.put('/api/post/:id', PostController.update); //atualiza um post através do id
router.delete('/api/post/:id', PostController.delete); //deleta uma post através do id
router.get('/api/post/:id/autor', PostController.autorPost); //recebe o autor de um posts

module.exports = router
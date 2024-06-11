const {Post} = require('../models');

module.exports = class PostController {
    static async showAll(req, res) {
        try {
            const all = await Post.findAll();
            res.status(200).json({all});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async show(req, res) {
        try {
            const post = await Post.findByPk(req.params.id);
            res.status(200).json({post});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async create(req, res) {
        try {
            const new_post = await Post.create({
                titulo: req.body.titulo,
                subtitulo: req.body.subtitulo,
                texto: req.body.texto,
                idAutor: req.body.idAutor
            })
            res.status(201).json({data: "Post criado"})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async update(req, res) {
        try {
            const post = await Post.findByPk(req.params.id);
            const post_update = await post.update({
                titulo: req.body.titulo,
                subtitulo: req.body.subtitulo,
                texto: req.body.texto,
                idAutor: req.body.idAutor
            })
            res.status(201).json({data: "Post atualizado"})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async delete(req, res) {
        try {
            const post = await Post.findByPk(req.params.id);
            if(post) {
                post.destroy();
                res.status(200).json({data: "post excluído"});
            }
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async autorPost(req, res) {
        try {
            const post = await Post.findByPk(req.params.id, {
                include: 'autor'
            });        
            res.status(200).json({post});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}       
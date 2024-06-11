const {Autor} = require('../models');

module.exports = class AutorController {
    static async showAll(req, res) {
        try {
            const all = await Autor.findAll();
            res.status(200).json({all});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async show(req, res) {
        try {
            const autor = await Autor.findByPk(req.params.id);
            res.status(200).json({autor});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async create(req, res) {
        try {
            const new_autor = await Autor.create({
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                email: req.body.email
            })
            res.status(201).json({data: "Usuário criado"})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async update(req, res) {
        try {
            const autor = await Autor.findByPk(req.params.id);
            const autor_update = await autor.update({
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                email: req.body.email
            })
            res.status(201).json({data: "Usuário atualizado"})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async delete(req, res) {
        try {
            const autor = await Autor.findByPk(req.params.id);
            if(autor) {
                autor.destroy();
                res.status(200).json({data: "Autor excluído"});
            }
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async postsAutor(req, res) {
        try {
            const autor = await Autor.findByPk(req.params.id, {
                include: 'post'
            })
            res.status(200).json({autor});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}
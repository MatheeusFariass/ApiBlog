
# Api Blog

**Disciplina:** Desenvolvimento Web II

**Curso:** Análise e Desenvolvimento de Sistemas

**Professor:** Érico Borgonove

**Objetivo:** Desenvolver uma API web utilizando Node.js e Sequelize, criando duas tabelas utilizando migrations e realizar operações de crud.


## Rotas da API

### Rotas de Autor
**mostra todos os autores:**
``GET /api/autor``

![App Screenshot]('./public/images/showAllAutor.png')

**mostra um autor através do id:**
``GET /api/autor/:id``

![App Screenshot]('./public/images/showAutor.png')

**cria um novo autor:**
``POST /api/autor``

![App Screenshot]('./public/images/createAutor.png')

**atualiza um autor através do id:**
``PUT /api/autor/:id``

![App Screenshot]('./public/images/updateAutor.png')

**deleta um autor através do id:**
``DELETE /api/post/:id``

![App Screenshot]('./public/images/deleteAutor.png')

**recebe todos os posts de um autor:**
``DELETE /api/autor/:id/posts``

![App Screenshot]('./public/images/postsAutor.png')

### Rotas de Post
**mostra todos os posts:**
``GET /api/post``

![App Screenshot]('../public/images/postShowAll.png')

**mostra um post através do id:**
``GET /api/post/:id``

![App Screenshot]('../public/images/postShow.png')

**cria um novo post:**
``POST /api/post``

![App Screenshot]('../public/images/postCreate.png')

**atualiza um post através do id:**
``PUT /api/post/:id``

![App Screenshot]('../public/images/postUpdate.png')

**deleta um post através do id:**
``DELETE /api/post/:id``

![App Screenshot]('../public/images/postDelete.png')

**recebe o autor de um posts:**
``GET /api/post/:id/autor``

![App Screenshot]('../public/images/autorPost.png')
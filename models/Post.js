'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.Autor, {
        as: 'autor',
        foreignKey: 'idAutor'
      })
    }
  }
  Post.init({
    titulo: DataTypes.STRING,
    subtitulo: DataTypes.STRING,
    texto: DataTypes.STRING,
    idAutor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'post'
  });
  return Post;
};
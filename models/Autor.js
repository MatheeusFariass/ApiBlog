'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      this.hasMany(models.Post, {
        as:'post',
        foreignKey: "idAutor"
      })
    }
  }
  Autor.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: 'autor'
  });
  return Autor;
};
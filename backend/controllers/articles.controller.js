const { response, request } = require('express');
const faker = require('faker');

const Article = require('../models/article');

// Importacion de libreria para autoimportaciones de VsCode
// Renombrado de response para utilizar ayuda IDE
const articleGet = async (req = request, res = response) => {
  const articles = await Article.find();

  if (articles.length <= 0) {
    for (let i = 0; i < 100; i++) {
      await Article.create({
        title: faker.name.title(),
        imageUrl: faker.image.imageUrl(),
        description: faker.lorem.paragraph(),
      });
    }
  }
  res.send('100 Records created!');
};

const articlesFind = async (req = request, res = response) => {
  const articles = await Article.find();

  res.json(articles);
};

const articlePost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: 'post API - controller',
    nombre,
    edad,
  });
};

const articlePut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: 'put API - Controller',
    id,
  });
};

const articlePatch = (req, res = response) => {
  res.json({
    msg: 'patch API - Controller',
  });
};

const articleDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - Controller',
  });
};

module.exports = {
  articleGet,
  articlesFind,
  articlePost,
  articlePut,
  articlePatch,
  articleDelete,
};

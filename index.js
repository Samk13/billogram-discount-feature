'use strict';
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const { router } = require('./src/router/router');

const swaggerOptions = {
  apis: ['./src/router/*.js'],
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Billogram discount code API',
      contact: {
          email: "samarbid13@gmail.com",
      },
      version: '1.0.0',
      description: 'A simple Express API that generate disount codes',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
};
const specs = swaggerJsDoc(swaggerOptions)

const port = process.env.PORT || 3000;
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

// to access url encoded request to read the arguments easily
app
  .use(
    express.urlencoded({
      extended: true,
    })
  )
  .listen(port);

app.use('/api', router);

// get requests
app.get('/', (req, res) => {
  res.sendFile('./src/pages/home.html', { root: __dirname });
});

// redirect

app.use((req, res) => {
  res.redirect('/');
});

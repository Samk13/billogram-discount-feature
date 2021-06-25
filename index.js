'use strict';
const express = require('express');
const { router } = require('./src/routes/router');


const { swaggerOptions } = require("./src/config/swagger-config");
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const specs = swaggerJsDoc(swaggerOptions)

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

const port = process.env.PORT || 3000;
// to access url encoded request to read the arguments easily
app.use(
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

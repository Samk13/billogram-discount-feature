const swaggerOptions = {
  apis: ['./src/routes/*.js'],
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

module.exports = {
  swaggerOptions
}
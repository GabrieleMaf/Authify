// src/swagger.js
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Auth Service',
      version: '1.0.0',
      description: 'Documentazione API per il servizio di autenticazione',
    },
  },
  // Indica i file dove ci sono le annotazioni swagger (controller, routes o modelli)
  apis: ['./src/controllers/*.js', './src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

export default specs;

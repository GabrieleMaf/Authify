import express from 'express';
import userRoutes from './routes/user.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './config/swagger.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

// Monta la documentazione swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;

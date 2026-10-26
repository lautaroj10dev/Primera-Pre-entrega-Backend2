import express from 'express';
import apiRouter from './routes/index.router.js';
import errorHandler from './middlewares/errorHandler.middleware.js';

const app = express();

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales de la API
app.use('/api', apiRouter);

// Manejo de rutas inexistentes (404)
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
  });
});

// Middleware de manejo de errores
app.use(errorHandler);

export default app;

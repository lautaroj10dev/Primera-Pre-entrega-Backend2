import app from './app.js';
import config from './config/config.js';
import connectDB from './config/db.js';

const PORT = config.port;

const startServer = async () => {
  // Inicialización de conexión a base de datos
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`📡 Entorno: ${config.nodeEnv}`);
    console.log(`🩺 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🎉 Events: http://localhost:${PORT}/api/events`);
  });
};

startServer();

import mongoose from 'mongoose';
import config from './config.js';

export const connectDB = async () => {
  try {
    if (!config.mongoUrl) {
      console.warn('⚠️ [DB] MONGO_URL no está configurada.');
      return;
    }
    await mongoose.connect(config.mongoUrl, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log('✅ [DB] Conectado exitosamente a MongoDB');
  } catch (error) {
    console.warn(`⚠️ [DB] MongoDB no disponible en esta etapa (${error.message}). El servidor continuará operando.`);
  }
};

export default connectDB;

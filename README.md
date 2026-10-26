# 🎟️ Plataforma de Gestión de Eventos e Inscripciones - API REST

> **Curso:** Programación Backend II: Diseño y Arquitectura Backend  
> **Comisión / Entrega:** Pre-entrega 1 - Refactor arquitectónico inicial

---

## 📌 Temática del Proyecto

Este proyecto consiste en una **Plataforma de Gestión de Eventos e Inscripciones**. La API REST permite la publicación, consulta y administración de eventos presenciales y virtuales, así como la gestión de inscripciones de participantes, validación de cupos y autenticación de usuarios y organizadores.

En esta primera etapa (**Pre-entrega 1**), se establece la **base arquitectónica modular y profesional** del proyecto, organizada por capas (Clean Architecture / N-Tier Architecture), preparada para escalar en las siguientes entregas con autenticación JWT, Passport, roles, cookies y persistencia con MongoDB y Mongoose.

---

## 🚀 Tecnologías Utilizadas

- **Node.js** (Entorno de ejecución JavaScript del lado del servidor - v18+)
- **Express.js** (Framework web minimalista y robusto)
- **Mongoose** (ODM para modelado de datos en MongoDB)
- **dotenv** (Gestión de variables de entorno)
- **Nodemon** (Herramienta para desarrollo con reinicio automático)
- **ES Modules (ESM)** (Sintaxis nativa `import` / `export`)

---

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura en capas para desacoplar responsabilidades:

```text
proyecto-eventos/
├── src/
│   ├── app.js                          # Configuración de Express, middlewares y montaje de rutas
│   ├── server.js                       # Punto de entrada que levanta el servidor HTTP
│   ├── config/
│   │   ├── config.js                   # Carga centralizada de variables de entorno (dotenv)
│   │   └── db.js                       # Conexión y configuración de MongoDB con Mongoose
│   ├── routes/
│   │   ├── index.router.js             # Enrutador principal de la API (/api)
│   │   ├── events.router.js            # Enrutador para el recurso /events
│   │   └── sessions.router.js          # Enrutador inicial para autenticación y sesiones
│   ├── controllers/
│   │   ├── events.controller.js        # Lógica de respuesta para eventos
│   │   ├── sessions.controller.js      # Controladores base para sesiones (auth)
│   │   └── health.controller.js        # Controlador del estado del servidor (health check)
│   ├── services/
│   │   ├── events.service.js           # Lógica de negocio para eventos
│   │   └── sessions.service.js         # Lógica de negocio para sesiones/usuarios
│   ├── repositories/                   # Patrón Repository para abstracción de datos (futuras entregas)
│   │   └── .gitkeep
│   ├── dao/                            # Data Access Object para persistencia (futuras entregas)
│   │   └── .gitkeep
│   ├── models/
│   │   ├── User.js                     # Esquema y modelo base de Usuarios
│   │   └── Event.js                    # Esquema y modelo base de Eventos
│   ├── middlewares/
│   │   └── errorHandler.middleware.js  # Middleware global de gestión de errores
│   └── utils/                          # Funciones utilitarias (jwt, bcrypt, etc.)
│       └── .gitkeep
├── .env.example                        # Plantilla de variables de entorno
├── .gitignore                          # Exclusión de archivos sensibles y node_modules
├── package.json                        # Definición del paquete y dependencias
└── README.md                           # Documentación completa del proyecto
```

---

## ⚙️ Configuración de Variables de Entorno

El proyecto requiere un archivo `.env` en la raíz. Existe una plantilla `.env.example` como referencia.

Crea un archivo `.env` copiando el ejemplo:

```bash
cp .env.example .env
```

Variables disponibles:

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `PORT` | Puerto en el que escucha el servidor Express | `8080` |
| `NODE_ENV` | Entorno de ejecución (`development` / `production`) | `development` |
| `MONGO_URL` | URI de conexión a la base de datos MongoDB | `mongodb://localhost:27017/eventos_db` |
| `JWT_SECRET` | Llave secreta para la firma y verificación de tokens JWT | `tu_secreto_jwt_aqui` |

---

## 📦 Instalación

1. Clona el repositorio o descarga el código fuente:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd PreEntregasBackend2
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Asegúrate de tener tu archivo `.env` configurado.

---

## 💻 Cómo Ejecutar el Servidor

### Modo Producción / Estándar
```bash
npm start
```

### Modo Desarrollo (con recarga automática)
```bash
npm run dev
```

---

## 📡 Rutas y Endpoints Disponibles

### 1. Health Check
Verifica que el servidor se encuentre activo y respondiendo correctamente.

- **Método:** `GET`
- **Ruta:** `/api/health`
- **Respuesta (200 OK):**
```json
{
  "status": "ok",
  "message": "Servidor activo"
}
```

---

### 2. Eventos (`/api/events`)

#### Obtener todos los eventos
Devuelve la lista de eventos disponibles (inicialmente vacía en esta fase).

- **Método:** `GET`
- **Ruta:** `/api/events`
- **Respuesta (200 OK):**
```json
{
  "status": "success",
  "payload": []
}
```

---

### 3. Sesiones / Autenticación (`/api/sessions`)
Estructura inicial configurada para el desarrollo de autenticación y sesiones en las próximas entregas:

| Método | Endpoint | Descripción | Respuesta inicial |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/sessions/register` | Registro de usuario | `501 Not Implemented` (Estructura base) |
| `POST` | `/api/sessions/login` | Inicio de sesión | `501 Not Implemented` (Estructura base) |
| `GET` | `/api/sessions/current` | Datos del usuario actual autenticado | `501 Not Implemented` (Estructura base) |

---

## 📋 Modelos de Datos Iniciales

### Modelo `User` (`src/models/User.js`)
Campos mínimos implementados:
- `first_name` (String, requerido)
- `last_name` (String, requerido)
- `email` (String, requerido, único, lowercase)
- `password` (String, requerido)
- `role` (String, enum: `['user', 'admin']`, default: `'user'`)
- `timestamps` (`createdAt`, `updatedAt`)

### Modelo `Event` (`src/models/Event.js`)
Campos mínimos implementados:
- `title` (String, requerido)
- `description` (String, requerido)
- `date` (Date, requerido)
- `location` (String, requerido)
- `capacity` (Number, requerido, mínimo 1)
- `timestamps` (`createdAt`, `updatedAt`)

---

## 🛡️ Buenas Prácticas y Criterios Cumplidos

- ✅ **Separación estricta de responsabilidades:** `app.js` configura Express y `server.js` levanta el servidor.
- ✅ **Sin lógica en `app.js`:** Rutas y controladores delegados a módulos específicos.
- ✅ **Variables de entorno seguras:** `.env` excluido del control de versiones mediante `.gitignore`.
- ✅ **Módulos nativos ECMAScript (ESM):** `import` y `export` en todo el proyecto.
- ✅ **Manejo de errores centralizado:** Middleware de 404 para rutas inexistentes y middleware global de excepciones.

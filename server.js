const jsonServer = require("json-server");
const authMiddleware = require("./authMiddleware"); // Importe o middleware

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware para autenticação (antes do roteador)
server.use(authMiddleware);

// Middleware para permitir CORS (opcional)
server.use(middlewares);

// Roteador para os dados do arquivo db.json
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

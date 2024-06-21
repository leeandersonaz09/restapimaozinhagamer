// authMiddleware.js
const jwt = require("jsonwebtoken");

const secretKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImlhdCI6MTcxODkzNTgxMX0.h6G8RRP2nuE6sDeZZZo8FpKXizmx1gKCIbcac7p0mx8";

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Adicione o usuário decodificado à solicitação
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido" });
  }
}

module.exports = authenticate;

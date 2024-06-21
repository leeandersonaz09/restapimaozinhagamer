// restrictMiddleware.js
function restrict(req, res, next) {
  if (req.method === "GET") {
    // Permite apenas o método GET
    next();
  } else {
    res.status(403).json({ message: "Acesso não autorizado" });
  }
}

module.exports = restrict;

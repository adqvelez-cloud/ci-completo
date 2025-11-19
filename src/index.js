const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

function sumar(a, b) {
  return a + b;
}
module.exports = { sumar };

app.get("/", (req, res) => {
  res.send("🚀 App desplegada con Express, Docker y Railway!");
});

// Solo iniciar el servidor si este archivo se ejecuta directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}

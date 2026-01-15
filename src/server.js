<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const zonas = require("./zonas.json");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de consulta de zona por CEP",
    exemplo: "/zona?cep=62435010"
  });
});

app.get("/zona", (req, res) => {
  const { cep } = req.query;

  if (!cep) {
    return res.status(400).json({
      erro: "Informe o CEP"
    });
  }

  const cepNumero = Number(cep);

  if (isNaN(cepNumero)) {
    return res.status(400).json({
      erro: "CEP inválido"
    });
  }

  const zonaEncontrada = zonas.find(z =>
    cepNumero >= z.cepInicio &&
    cepNumero <= z.cepFim
  );

  if (!zonaEncontrada) {
    return res.status(404).json({
      erro: "Zona não encontrada para esse CEP"
    });
  }

  res.json({
    cep: cepNumero,
    zona: zonaEncontrada.zona
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});
=======
// SÓ VAI FUNCIONAR CASO TENHA O NODE JS INSTALADO NA MAQUINA PARA INICIAR UM SERVIDOR
// CASO NÃO TENHA UTILIZAR APENAS O SCRIPT.JS

const express = require("express");
const cors = require("cors");
const zonas = require("./zonas.json");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de consulta de zona por CEP",
    exemplo: "/zona?cep=62435010"
  });
});

app.get("/zona", (req, res) => {
  const { cep } = req.query;

  if (!cep) {
    return res.status(400).json({
      erro: "Informe o CEP"
    });
  }

  const cepNumero = Number(cep);

  if (isNaN(cepNumero)) {
    return res.status(400).json({
      erro: "CEP inválido"
    });
  }

  const zonaEncontrada = zonas.find(z =>
    cepNumero >= z.cepInicio &&
    cepNumero <= z.cepFim
  );

  if (!zonaEncontrada) {
    return res.status(404).json({
      erro: "Zona não encontrada para esse CEP"
    });
  }

  res.json({
    cep: cepNumero,
    zona: zonaEncontrada.zona
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});
>>>>>>> 011f0ca (add script no server e arquivo json para JS)

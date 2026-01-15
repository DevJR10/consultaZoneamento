# Consulta de Zoneamento por CEP

API simples para consultar a **zona de transporte** a partir de um **CEP**.

---

## Como rodar o servidor

1. Instale as dependências:

```bash
npm install
```

2. Entre na pasta do servidor:

```bash
cd src
```

3. Inicie a API:

```bash
node server.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## Como acessar a API

A API pode ser acessada a partir de **qualquer dispositivo conectado ao mesmo Wi-Fi**.

Basta usar o **IP local** do computador onde o servidor está rodando no lugar de `localhost`.

### Endpoint

```
GET /zona?cep=SEU_CEP
```

### Exemplo

Se o IP do computador for `192.168.0.10`, acesse no navegador ou via requisição HTTP:

```
http://192.168.0.10:3000/zona?cep=62435010
```

### Retorno esperado

```json
{
  "cep": 62435010,
  "zona": "CE0470710"
}
```

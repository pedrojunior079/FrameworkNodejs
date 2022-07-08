const express = require('express');
const  app = express();

function isAuthorized(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'secretpassword') {
      next();
    } else {
      res.status(401);
      res.send('Not permitted');
    }
  }


const port = 3000;

app.get('/', (req, res) => res.send('Ola Mundo!'));

app.get("/users", isAuthorized, (req, res) => {
    res.json([
        {
            id: 1,
            nome: "User Userson",
        },
    ]);
});

app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            nome: "O olho mais azul",
        },
    ]);
});

app.listen(port, () => console.log(`Aplicativo de exemplo ouvindo na porta ${port}!`));
const express = require('express');
const  app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Ola Mundo!'));

app.get("/produtos", (req, res) => {
      const produtos = [
      {
          id: 1, 
          nome: "martelo",
      },
      {
          id: 2,
          nome: "chave de Fenda",
      },
      {
          id: 3,
          nome: "chave inglesa",
      },
    ];
    res.json(produtos);
});

app.listen(port, () => console.log(`Aplicativo de exemplo ouvindo na porta ${port}!`));
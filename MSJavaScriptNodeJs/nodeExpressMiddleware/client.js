const http = require("http");

http.get(
  {
    port: 3000,
    hostname: "localhost",
    path: "/users",
    headers: {
      authorization: 'secretpassword'
    },
  },
  (res) => {
    console.log("connectado");
    res.on("data", (chunk) => {
      console.log("chunk", "" + chunk);
    });
    res.on("end", () => {
      console.log("Sem mais dados");
    });
    res.on("close", () => {
      console.log("Fechando conexão");
    });
  }
);

const {parse} = require("../address-parser");

describe('Addres parser', () => {
   test('deve analisar corretamente', () => {
     expert(
       parse(
        "Quero encomendar: 3 livros para endereçar: 112 street city aqui estão minhas informações de pagamento: cardnumber"  
        )
        ).toEqual({
            order: "3 livros",
            address: "112 street city",
            payment: "cardnumber",
        });
   });
});
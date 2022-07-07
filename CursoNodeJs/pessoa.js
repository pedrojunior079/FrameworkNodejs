class Pessoa{
  constructor(nome){
    this.nome = nome;
  }
  
  meuNome(){
    return `Meu nome é ${this.nome}!`;
  }
}

module.exports = {
    Pessoa,
};
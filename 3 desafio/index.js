class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo.toLowerCase();
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "um ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso
  const heroi1 = new Heroi("Arthas", 30, "guerreiro");
  const heroi2 = new Heroi("Gandalf", 70, "mago");
  const heroi3 = new Heroi("Bruce", 45, "monge");
  const heroi4 = new Heroi("Ryu", 28, "ninja");
  
  heroi1.atacar(); // O guerreiro atacou usando espada
  heroi2.atacar(); // O mago atacou usando magia
  heroi3.atacar(); // O monge atacou usando artes marciais
  heroi4.atacar(); // O ninja atacou usando shuriken
  
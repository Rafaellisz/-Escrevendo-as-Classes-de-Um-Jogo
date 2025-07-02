// Construção da classe
class Heroi {
  constructor({ nome, idade, tipo }) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    const ataques = {
      mago: 'magia',
      guerreiro: 'espada',
      monge: 'artes marciais',
      ninja: 'shuriken'
    };

    const ataque = ataques[this.tipo] || 'um ataque desconhecido';
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Dados dos heróis em JSON 
const dadosHerois = [
  { nome: 'Ralf', idade: 150, tipo: 'mago' },
  { nome: 'Aralto', idade: 30, tipo: 'guerreiro' },
  { nome: 'Lia', idade: 40, tipo: 'monge' },
  { nome: 'Shin', idade: 25, tipo: 'ninja' }
];

// Criando heróis e executando o ataque 
const heroi1 = new Heroi(dadosHerois[0]);
const heroi2 = new Heroi(dadosHerois[1]);
const heroi3 = new Heroi(dadosHerois[2]);
const heroi4 = new Heroi(dadosHerois[3]);

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
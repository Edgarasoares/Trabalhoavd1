interface IEndereco {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
}

const endereco: IEndereco = {
  rua: 'Rubinho',
  numero: 25,
  bairro: 'Vila',
  cidade: 'Volta Redonda',
};

console.log(endereco);

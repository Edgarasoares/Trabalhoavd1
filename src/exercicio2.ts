class Veiculos {
  constructor(
    private _modelo: string,
    private _marca: string,
    private _ano: number,
    private _valor: number,
    private _dias: number
  ) {}

  get modelo() {
    return this._modelo;
  }

  get marca() {
    return this._marca;
  }

  get ano() {
    return this._ano;
  }

  get valor() {
    return this._valor;
  }

  get dias() {
    return this._dias;
  }

  set modelo(modelo: string) {
    if (modelo === '') {
      throw new Error('Modelo de veiculo invalido');
    }
    this._modelo = modelo;
  }

  set marca(marca: string) {
    if (marca === '') {
      throw new Error('Marca de veiculo invalida');
    }
    this._marca = marca;
  }

  set ano(ano: number) {
    if (ano <= 0) {
      throw new Error('Valor de veiculo invalido');
    }
    this._ano = ano;
  }

  set valor(valor: number) {
    if (valor <= 0) {
      throw new Error('Valor para locação do veiculo invalido');
    }
    this._valor = valor;
  }

  set dias(dias: number) {
    if (dias <= 0) {
      throw new Error('Quantidade de dias de locacao invalido');
    }
    this._dias = dias;
  }

  public calculoLocacao() {
    return this._dias * this._valor;
  }
}

let calcLocacaoVeiculo = new Veiculos('Fiesta', 'Ford', 2017, 180, 5);
console.log(calcLocacaoVeiculo);
console.log('Valor da locacao: ', calcLocacaoVeiculo.calculoLocacao());

class Fatura {
  constructor(
    private _numeroFatura: number,
    private _descricaoFatura: string,
    private _quantidadeComprada: number,
    private _preco: number
  ) {}

  get numeroFatura() {
    return this._numeroFatura;
  }

  get descricaoFatura() {
    return this._descricaoFatura;
  }

  get quantidadeComprada() {
    return this._quantidadeComprada;
  }

  get preco() {
    return this._preco;
  }

  set numeroFatura(numeroFatura: number) {
    if (numeroFatura < 0) {
      throw new Error('Numero da fatura invalido');
    }
    this._numeroFatura = numeroFatura;
  }

  set descricaoFatura(descricaoFatura: string) {
    if (descricaoFatura === '') {
      throw new Error('Descricao da fatura invalida');
    }
    this._descricaoFatura = descricaoFatura;
  }

  set quantidadeComprada(quantidadeComprada: number) {
    if (quantidadeComprada < 1) {
      throw new Error('Quantidade de compra invalida');
    }
    this._quantidadeComprada = quantidadeComprada;
  }

  set preco(preco: number) {
    if (preco <= 0) {
      throw new Error('Preço da compra invalido');
    }
    this._preco = preco;
  }

  public CalcPrecoFatura() {
    return this._quantidadeComprada * this._preco;
  }
}

const gerarFatura = new Fatura(11111111, 'Mouse', 5, 375);
console.log(gerarFatura);
console.log(gerarFatura.CalcPrecoFatura());

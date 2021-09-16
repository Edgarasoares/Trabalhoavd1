class ImpostoDeRenda {
  private _nome: string;
  private _renda: number;
  constructor(_nome: string, _renda: number) {
    this._nome = _nome;
    this._renda = _renda;
  }

  get nome() {
    return this._nome;
  }

  get renda() {
    return this._renda;
  }

  set nome(nome: string) {
    if (nome === '') {
      throw new Error('Nome informado invalido');
    }
    this._nome = nome;
  }

  set renda(renda: number) {
    if (renda <= 0) {
      throw new Error('Renda informada invalida');
    }
    this._renda = renda;
  }
}

class ImpostoPessoaFisica extends ImpostoDeRenda {
  private _gastosComSaude: number;

  constructor(nome: string, renda: number, gastosComSaude: number) {
    super(nome, renda);
    this._gastosComSaude = gastosComSaude;
  }

  get gastosComSaude() {
    return this._gastosComSaude;
  }

  set gastosComSaude(gastosComSaude: number) {
    if (gastosComSaude < 0) {
      throw new Error('Gastos com saude invalido');
    }
    this._gastosComSaude = gastosComSaude;
  }

  public calculoImpostoPessoaFisica() {
    if (this.renda < 20000) {
      let imposto = this.renda * 0.15;
      if (this.gastosComSaude > 0) {
        return imposto - this._gastosComSaude / 2;
      } else {
        return imposto;
      }
    } else if (this.renda >= 20000) {
      let imposto = this.renda * 0.25;
      if (this.gastosComSaude > 0) {
        return imposto - this._gastosComSaude / 2;
      } else {
        return imposto;
      }
    }
  }
}

class ImpostoPessoaJuridica extends ImpostoDeRenda {
  private _numeroFunc: number;

  constructor(nome: string, renda: number, numeroFunc: number) {
    super(nome, renda);
    this._numeroFunc = numeroFunc;
  }

  get numeroFunc() {
    return this._numeroFunc;
  }

  set numeroFunc(numeroFunc: number) {
    if (numeroFunc <= 0) {
      throw new Error('Numero de funcionarios invalido');
    }
    this._numeroFunc = numeroFunc;
  }

  public calculoIRFFPessoaJuridica() {
    if (this.numeroFunc > 10) {
      return this.renda * 0.14;
    } else {
      return this.renda * 0.16;
    }
  }
}

let calculoImposto = new ImpostoPessoaFisica('Edgar', 27000, 150);
let calculoPessoaFisica = calculoImposto.calculoImpostoPessoaFisica();
let calculoPessoaJuridica = new ImpostoPessoaJuridica('Luiz', 100000, 6);
let impostoPessoaJuridica = calculoPessoaJuridica.calculoIRFFPessoaJuridica();
console.log(`Total de imposto a ser pago: ${impostoPessoaJuridica}`);
console.log(`Total de imposto a ser pago: ${calculoPessoaFisica}`);

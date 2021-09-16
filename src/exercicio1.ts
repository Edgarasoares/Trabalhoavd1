class Pessoa {
  static SEXO = ['Masculino', 'Feminino'];
  constructor(
    private _nome: string,
    private _sexo: string,
    private _idade: number
  ) {}

  get nome() {
    return this._nome;
  }

  get sexo() {
    return this._sexo;
  }

  get idade() {
    return this._idade;
  }

  set nome(nome: string) {
    if (nome === '') {
      throw new Error('Nome informado invalido');
    }
    this._nome = nome;
  }

  set sexo(sexo: string) {
    if (!Pessoa.SEXO.includes(sexo)) {
      throw new Error('Sexo informado invalido');
    }
    this._sexo = sexo;
  }

  set idade(idade: number) {
    if (idade <= 0) {
      throw new Error('Idade informada invalida');
    }
    this._idade = idade;
  }

  public IdadeMensagem() {
    if (this._idade >= 18) {
      return `Maior de idade`;
    } else {
      return `Menor de idade`;
    }
  }
}

let pessoa = new Pessoa('Edgar', 'Masculino', 28);
console.log(pessoa.IdadeMensagem());

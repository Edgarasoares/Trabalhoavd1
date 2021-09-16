class Vendedor {
  constructor(
    private _nome: string,
    private _salario: number,
    private _valor: number
  ) {}

  get nome() {
    return this._nome;
  }

  get salario() {
    return this._salario;
  }

  get valor() {
    return this._valor;
  }

  set nome(nome: string) {
    if (nome === '') {
      throw new Error('Nome do vendedor invalido');
    }
    this._nome = nome;
  }

  set salario(salario: number) {
    if (salario <= 0) {
      throw new Error('Valor do salario invalido');
    }
    this._salario = salario;
  }

  set valor(valor: number) {
    if (valor < 0) {
      throw new Error('Valor da venda invalido');
    }
    this._valor = valor;
  }

  public CalcDescontoSal() {
    return this._salario * 0.08;
  }
}

class PessoaFisica extends Vendedor {
  static REGIAO = ['Sul', 'Sudeste', 'Centro-oeste', 'Norte', 'Nordeste'];
  private _regiaoFuncionario: string;

  constructor(
    nome: string,
    salario: number,
    valor: number,
    regiaoFuncionario: string
  ) {
    super(nome, salario, valor);
    this._regiaoFuncionario = regiaoFuncionario;
  }

  get regiaoFuncionario() {
    return this._regiaoFuncionario;
  }

  set regiaoFuncionario(regiaoFuncionario: string) {
    if (!PessoaFisica.REGIAO.includes(regiaoFuncionario)) {
      throw new Error(
        'Regiões validas: Sul, Sudeste, Centro-oeste, Norte, Nordeste '
      );
    }
    this._regiaoFuncionario = regiaoFuncionario;
  }

  public calcularComissaoFisica() {
    if (this.regiaoFuncionario === 'Sul') {
      return this.valor * 0.1;
    } else if (this.regiaoFuncionario === 'Sudeste') {
      return this.valor * 0.12;
    } else if (this.regiaoFuncionario === 'Centro-oeste') {
      return this.valor * 0.14;
    } else if (this.regiaoFuncionario === 'Norte') {
      return this.valor * 0.15;
    } else {
      return this.valor * 0.17;
    }
  }

  public calcularSalarioTotal() {
    return this.salario + this.calcularComissaoFisica();
  }
}

class PessoaJuridica extends Vendedor {
  private _Empresa: string;
  private _totalFuncionarios: number;

  constructor(
    nome: string,
    salario: number,
    valor: number,
    Empresa: string,
    totalFuncionarios: number
  ) {
    super(nome, salario, valor);
    this._Empresa = Empresa;
    this._totalFuncionarios = totalFuncionarios;
  }

  get Empresa() {
    return this._Empresa;
  }

  get totalFuncionarios() {
    return this._totalFuncionarios;
  }

  set Empresa(Empresa: string) {
    if (Empresa === '') {
      throw new Error('Nome da empresa invalido');
    }
    this._Empresa = Empresa;
  }

  set totalEmpresa(totalFuncionarios: number) {
    if (totalFuncionarios < 1) {
      throw new Error('Numero de funcionarios deve ser maior que 0');
    }
    this._totalFuncionarios = totalFuncionarios;
  }

  public calcularComissaoJuridica() {
    if (this.valor < 5000) {
      return this.valor * 0.02;
    } else if (this.valor >= 5000 && this.valor < 10000) {
      return this.valor * 0.04;
    } else {
      return this.valor * 0.06;
    }
  }

  public calcularSalarioTotalJuridica() {
    if (this._totalFuncionarios < 100) {
      return this.salario + this.calcularComissaoJuridica() + 200;
    } else {
      return this.salario + this.calcularComissaoJuridica() + 300;
    }
  }
}

let calcDesconto = new Vendedor('Roger', 1950, 850);
let vendedorFisica = new PessoaFisica('Rogerio', 950, 1200, 'Sudeste');
let vendedorJuridica = new PessoaJuridica(
  'Edgar',
  15000,
  30000,
  'Bradesco Seguros',
  1500
);
let comissaoFisica = vendedorFisica.calcularComissaoFisica();
let salarioFisica = vendedorFisica.calcularSalarioTotal();
let comissaoJuridica = vendedorJuridica.calcularComissaoJuridica();
let salarioJuridica = vendedorJuridica.calcularSalarioTotalJuridica();
console.log('Desconto: ', calcDesconto.CalcDescontoSal());
console.log(`Comissao de ${comissaoFisica}`);
console.log(`Comissao de ${comissaoJuridica}`);

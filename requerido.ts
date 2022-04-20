type pessoa = {
    nome: string
    sobrenome: string;
    idade: number;
}


type AllFieldsRequired = Required<pessoa>


const pessoa1 : AllFieldsRequired = {
    nome:"whindersson",
    sobrenome: "nunes",
    idade: 26
}

const escreverNome = ({nome, ...rest}) =>{
    const {sobrenome, idade } = rest
    console.log(`Olá! meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`)
}

escreverNome(pessoa1)
// Configurando a entrada de Dados pelo usuário
const readline = require('readline') // biblioteca nativa que permite a leitura de dados do usuário

// Criando a interface para o usuário
const rl = readline.createInterface({
    input:process.stdin, // entrada padrão do terminal
    output:process.stdout // saída padrão do terminal
})

// Perguntando o nome do usuário e os valores a serem somados atráves da biblioteca readline
rl.question('Digite o seu nome: ', (nome) => {
rl.question('Digite o primiero valor: ', (valor1) => {
rl.question('Digite o segundo valor: ', (valor2) => {

    const soma = Number(valor1) + Number(valor2)

    // Exibindo o resultado da soma dos valores digitados pelo usuário
    console.log('--*--*--* RESULTADO *--*--*--')
    console.log(`Nome: ${nome}`)
    console.log(`A soma dos valores é: ${soma}`)

    rl.close() // fechando a interface de leitura de dados do usuário
})
})
})
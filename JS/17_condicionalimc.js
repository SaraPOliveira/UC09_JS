const readline = require('readline') 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('        Teste - IMC')
console.log('---*---*---*---*---*---*---')
console.log('')

rl.question('Digite o seu peso: ', (peso) => {
    rl.question('Digite a sua altura: ', (altura) => {

        let peso = Number(peso)
        let altura = Number(altura)

        if (altura <= 0 || peso <= 0) {
            console.log('')
            console.log('Peso ou altura inválidos!') 
        } else {
            let imc = peso / (altura ** 2)
            
            console.log('')
            console.log(`O seu IMC é: ${imc.toFixed(2)}`)

            if (imc < 17) {
                console.log('Muito abaixo do peso') 
            } else if (imc >= 17 && imc <= 18.5) {
                console.log('Abaixo do peso')
            } else if (imc > 18.5 && imc < 25) {
                console.log('Peso normal')
            } else if (imc >= 25 && imc < 30) {
                console.log('Sobrepeso')
            } else if (imc >= 30 && imc < 35) {
                console.log('Obesidade grau I')
            } else if (imc >= 35 && imc < 40) {
                console.log('Obesidade grau II (severa)')
            } else {
                console.log('Obesidade grau III (mórbida)')
            }
        }

        rl.close()

    })
})
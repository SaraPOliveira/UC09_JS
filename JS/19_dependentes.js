const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('     REAJUSTE DE SALÁRIO')
console.log('---*---*---*---*---*---*---')
console.log('')

rl.question('Digite o seu nome: ', (nome) => {
    rl.question('Insira o seu salário: ', (salario) => {
        rl.question('Qual a quantidade de dependentes: ', (dependentes) => {
            console.log('')

            let sal = Number(salario)
            let dep = Number(dependentes)
            let reajuste = 0

            switch (dep) {
                case 0:
                    reajuste = sal * 1.05
                break

                case 1:
                case 2:
                case 3:
                    reajuste = sal * 1.10
                break

                case 4:
                case 5:
                case 6:
                    reajuste = sal * 1.15
                    break

                case 7:
                    reajuste = sal * 1.18
                break

                default:
                    reajuste = sal * 1.20
                break
            }

            console.log('-----------------------------------------------')
            console.log(`${nome}, seu salário após reajuste é dê R$ ${reajuste.toFixed(2)}`)
            console.log('-----------------------------------------------')

            rl.close()
        })
    })
})
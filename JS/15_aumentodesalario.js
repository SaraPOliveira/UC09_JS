const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('    REAJUSTE DE SALÁRIO')
console.log('---*---*---*---*---*---*---')
console.log('')

rl.question(`Informe o nome do funcionário: `, (nome) => {
rl.question(`Informe o salário do funcionário: `, (salario) => {
        
        if(salario <= 1000) {
            let aumento = Number(salario) + Number(200)
            console.log('')
            console.log(`${nome} seu aumento Salarial é de ${aumento}`) 
        } else {
            let aumento = Number(salario) + Number(50)
            console.log('')
            console.log(`${nome}, seu aumento Salarial é dê ${aumento}`)
        }

        rl.close()

    })
})
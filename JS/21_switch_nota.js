const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('    BOLETIM ESCOLAR')
console.log('---*---*---*---*---*---*---')
console.log('')


        console.log('Insira a sua nota conforme o menu abaixo: ')
        console.log('[0 a 4] - Reprovado')
        console.log('[5 e 6] - Recuperação')
        console.log('[7 e 8] - Aprovado')
        console.log('[9 e 10] - Aprovado com Destaque')

        rl.question(`Nota: `, (nota) => {

            let n = Number(nota)

            switch(n){
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:   
                    console.log('') 
                    console.log('Reprovado')
                break

                case 5:
                case 6:
                    console.log('')
                    console.log('Recuperação')
                break

                case 7:
                case 8:
                    console.log('')
                    console.log('Aprovado')
                break

                case 9:
                case 10:
                    console.log('')
                    console.log('Aprovado com Destaque')
                break

                default: //outro caso
                    console.log('')
                    console.log('Opção inválida!')
                break

            }

            rl.close()
        })
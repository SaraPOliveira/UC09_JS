const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('        FATORIAL')
console.log('---*---*---*---*---*---*---')
console.log('')

function fatorial(){

    rl.question(`Digite um número: `, (num) => {
        console.log('')
    
        num = Number(num)

        let i = num
        let fat = 1

        if (num < 0) {
            console.log("Não existe fatorial de número negativo!")
        } else {
            do{
                if (i > 0) {
                    fat = fat * i
                }
                i = i - 1 
            } while(i > 1)

            console.log(`O fatorial de ${num} é: ${fat}`)
        }

        rl.question(`Quer continuar? [SIM] / [NÃO]: `, (resp) => {
            resp = resp.toUpperCase()

            if(resp === 'SIM' || resp === 'S'){
                console.log('')
                fatorial()
            }else{
                rl.close()
            }
        })
    })  
}
fatorial()
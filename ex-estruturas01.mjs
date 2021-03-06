/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Stack } from './lib/Stack.mjs' // Importando a pilha para amostragem do resultado

let num = 4    // Valor que será convertido em binário

let pilha = new Stack()     // Pilha onde será inserido os valores 0 e 1, quando retirar será convertido na ordem correta

while (num !== 0) {             // Enquando o valor for maior 0
    let resto = num % 2         // variáveis que receberá o "mod" (0 ou 1)
    num = (Math.floor(num / 2))     // Divisão do numéro em sua metade restante
    pilha.push(resto)           // Adiciona o valor binário na pilha
}

let numBinario = ''             // Criando uma string vazia

while (! pilha.empty) {         // Desempilhando e armazenando na string vazia
    numBinario += pilha.pop()
}

console.log(numBinario)         // Exibindo o número decimal
console.log(pilha.print())

/*
    // Usaremos a estutura pilha
import { Stack } from './lib/Stack.mjs'

const numDecimal = 2021

let num = numDecimal

const restos = new Stack()

while(num > 0) {
    restos.push(num % 2)        // Empilha o resto da divisão do número por 2
    // Corta o número pela metade, desprezando as casas decimais
    num = Math.floor(num / 2)
}

console.log(restos.print())

let binario = ''

while(! restos.empty) {
    binario += restos.pop()
}

console.log(`${numDecimal} em base 10 equivale a ${binario} em base 2.`)
*/
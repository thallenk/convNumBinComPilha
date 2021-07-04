var elementos = []
var topo     = -1
const readline = require('readline-sync')
const MAX = 10



function push(num){
    if (topo <= MAX){
        topo = topo + 1
        elementos[topo] = num;
    }
    else {
        console.log('Pilha está cheia!')
    }
}

function estaVazia(){
    return topo == -1;
}

function pop(){
    if(topo != -1){
        let num = elementos[topo];
        topo = topo - 1
        return num
    }
    else {
        console.log('Pilha está vazia')
    }
}

//codigo para o numero binário

var numDecimal = readline.question('Qual número decimal você deseja saber o seu correspondente binário?  ')
var resto;
//empilhando os resto
while(numDecimal != 0){
    resto = parseInt(numDecimal % 2)
    push(resto)
    numDecimal = parseInt(numDecimal / 2)

}

//desempilhando e printando os resto (núemro em binário)
while(!estaVazia()){
    console.log (pop())

}
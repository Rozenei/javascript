let saida = document.querySelector("section#saida")
let num = 0
let numSort = 0

function sortear() {
   let min = 1
   let max = 100
   let dif = max - min
   let aleatorio = Math.random()
    numSort = min + Math.trunc(dif * aleatorio)
}

function adivinha() {
   num = Number(prompt("Qual número você acha que foi sorteado ?"))
    
    if (numSort < num ) {
        saida.innerHTML += `<P> O número soteado é <strong>MENOR </strong>que  <mark>${num}</mark></P>`

    }else if (numSort > num) {
        saida.innerHTML += `<P> O número soteado  é <strong>MAIOR</strong> que  <mark>${num}</mark></P>`

    }else if (num === numSort) {
        saida.innerHTML += `<P> <strong>PARABÉNS</strong>, você acertou número soteado  é <mark>${num}</mark></P>`
    }
    
}

function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc( dif * aleatorio)

    let saida = document.querySelector("section#saida")
    saida.innerHTML += `<P>O número sorteado foi <mark>${num}</mark></P>`
}
function limpar() {
    let saida = document.querySelector("section#saida")
    saida.innerHTML = null
    
}
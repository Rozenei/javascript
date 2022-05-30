
function gerar() {
    let num = Number(Math.random())
    let saida = document.querySelector("section#saida")
    saida.innerHTML += `<P>O número sorteado foi <mark>${num}</mark></P>`
}
function limpar() {
    let saida = document.querySelector("section#saida")
    saida.innerHTML = null
    

    
}
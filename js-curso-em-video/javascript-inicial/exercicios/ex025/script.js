
function contar() {
    let valorf = Number(prompt("Digite o valor final"))
    let saida = document.querySelector("function#saida")

    let num = 0
    while (num <= valorf) {
        saida.innerHTML += `<P>Contando até ${num} &#x1F449;</P>`
        num++
    }
    saida.innerHTML += `<P>&#x1F3C1;</P>`

}
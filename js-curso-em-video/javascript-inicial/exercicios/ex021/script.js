
function contar() {
    let saida = document.querySelector("section#saida")
    saida.innerHTML += `<h2> Contando de 1 até 10</H2>`
    let cont = 1

    while (cont <= 10) {
        saida.innerHTML += `${cont} &#x1F449;`
        cont++
    }
    saida.innerHTML += ` &#x1F3C1;`

}
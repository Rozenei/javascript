
function contar() {
    let saida = document.querySelector("section#saida")

    saida.innerHTML += `<h2>Contagem regressiva de 10 até 1</h2>`
    let cont = 10
    while (cont >= 1) {
        saida.innerHTML += `${cont} &#x1F449;`
        cont --
    }
    saida.innerHTML += `&#x1F3C1;`

}

function contar() {
    let saida = document.querySelector("section#saida")
    saida.innerHTML = `<h2>Números pares de 1 até 10</h2>`

    let cont = 1
    while (cont <=10) {
        if ( cont % 2 == 0)

        saida.innerHTML += `${cont} &#x1F449;`
        cont++
    }
    saida.innerHTML += `&#x1F3C1;`
}

function somar() {
    let saida = document.getElementById("res")
    saida.innerHTML = `<h2>Números pares de 1 até 10</h2>`

    let soma = 0
    let cont = 1

    while (cont <=10) {
        if ( cont % 2 == 0)


        soma = soma + cont
        cont++
    }
    saida.innerHTML += `${soma}`
}

function tabuada() {
    let saida = document.getElementById("saida")

    let num = Number(document.getElementById("fnum").value)

    saida.innerHTML += `<h2>Taboada do ${num}</h2>`
    let cont = 1

    while (cont <= 10) {
        saida.innerHTML += `${num} x ${cont} = <strong>${num * cont}</strong><br>`
        cont ++
    }   

}

 
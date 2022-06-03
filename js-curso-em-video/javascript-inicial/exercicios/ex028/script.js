
function fatorial() {
    let saida = document.getElementById("saida")
    let num = Number(document.getElementById("fnum").value)

    saida.innerHTML += `<h2>Calculando Fatorial de ${num}</h2>`
    let fat = 1
    let cont = num
    while (cont > 1) {
       
        saida.innerHTML += `${cont} x  `
        fat *= cont // Correnponde ao cálculo fat = fat * cont
        cont --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString("pt-BR")}</strong>`


}
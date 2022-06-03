
function fatorial() {
    let saida = document.getElementById("saida")

    let num = Number(document.getElementById("fnum").value)
    let fat 

    saida.innerHTML = `<h2>Calculando Fatorial de ${num}</h2>`
    while (num <= 21 && num >= 1) {
       
        saida.innerHTML += `${num} x ${num-1} `
        num --
        
        
    }


}
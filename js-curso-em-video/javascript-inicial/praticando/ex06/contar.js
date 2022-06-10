
function contar() {
    let numIni = Number(document.getElementById("txti").value)
    let numFin = Number(document.getElementById("txtf").value)
    let pas = Number(document.getElementById("txtp").value)
    let saida = document.getElementById("res")

    saida.innerHTML += `<P>Contando de ${numIni} até ${numFin} de ${pas} em ${pas}</P>`
    
    while (numIni <= numFin || numIni >= numFin) {
        
        if (numIni <= numFin) {
            saida.innerHTML += `${numIni} &#x1F449; `
            numIni += pas
        } else if (numIni >= numFin) {
            saida.innerHTML += `${numIni} &#x1F449; `
            numIni -= pas
        }
        
    }
    
}

let dolar = parseFloat(prompt("Qual a cotação do dolar? "))

function convmoeda() {
    let real =  parseFloat(prompt("Quantos R$ você tem na carteira?"))
    let cot = real.toFixed(2) / dolar.toFixed(2) 

    let res = document.querySelector("section#resultado")

    res.innerHTML = `<P>Com ${real.toFixed(2)} R$ você consegue comprar ${cot.toFixed(2)} US$ </P>`
}
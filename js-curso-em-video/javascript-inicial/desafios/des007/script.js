
let dolar = parseFloat(prompt("Qual a cotação do dolar? "))

function convmoeda() {
    let real = parseFloat(prompt("Quantos R$ você tem na carteira?"))
    let cot = real / dolar

    let res = document.querySelector("section#resultado")

    res.innerHTML = `<P>Com ${real} R$ você consegue comprar ${cot}US$ </P>`
}

function porcento() {
    let produto = prompt("Qual é produto que você está comprando?")
    let preco = parseFloat(prompt(`Qual é o preço de ${produto}`))
    let desc = preco - (preco / 10) * 9
    let precofinal = preco - desc

    let res = document.querySelector("section#resultado")

    res.innerHTML = `<P>O preço original do ${produto} era R$ ${preco.toFixed(2)}.</P>`
    res.innerHTML += `<P>Você economizou R$ ${desc.toFixed(2)} com o desconto de (-10%).</P>`
    res.innerHTML += `<P>No fim, você vai pagar R$ ${precofinal.toFixed(2)} no ${produto}.</P>`
}
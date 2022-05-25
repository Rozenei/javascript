
function porcento() {
    let produto = prompt("Qual é produto que você está comprando?")
    let preco = parseFloat(prompt(`Qual é o preço do(a) ${produto}`))
    let desc = preco - (preco / 10)

    let res = document.querySelector("section#resultado")

    res.innerHTML = `O preço original era R$ ${preco}.`
    res.innerHTML += `Você economizou R$ ${desc} com o desconto de (-10%).`
    res.innerHTML += `No fim, você vai pagar R$ ${desc} no produto ${produto}.`
}
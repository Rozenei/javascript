

function troco() {
    let produto = prompt("Que produto você está comprando ?")
    let preco = Number(prompt(`Quanto custa o ${produto} que você está comprando ?`))
    let valor = Number(prompt("Qual foi o valor que deu para pagar ?"))
    let troc = valor - preco

    let res = document.getElementById("resultado")

    res.innerHTML = `<p>Você comprou um ${produto} que custa R$${preco}. </p>`
    
    res.innerHTML += `<p>Deu R$${valor} para pagar e vai receber R$ ${troc} de troco. <p/>`
    
    res.innerHTML += ("Volte sempre!")
}
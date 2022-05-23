
function troco() {
    let produto = prompt("Qual produto você vai comprar?")  
    let preco = Number(prompt(`Qual o preço do " ${produto} ?`))
    let valor = Number(prompt(`Quanto você deu para pagar? `))
    let valtroco = valor - preco

    alert ( `Você comprou um ${produto} que custa R$ ${preco},00.
    Deu R$ ${valor},00 para pagar e vai receber R$ ${valtroco},00 de troco.
    Volte sempre.`)
}

function mudapreco() {
let precoant = parseFloat(prompt("Informe o preço anterior"))
let precoatual = parseFloat(prompt("Informe o preço antual"))
let preco = precoatual - precoant
let variacao = precoatual - precoant
let porcerto = (variacao / precoatual) * 100

let res = document.querySelector("section#resultado")

porcetagem

valor é X por cento de Y  =  (100 / X) * Y

if (precoant < precoatual) {
    document.write( "<P> O produto custava R$ " + precoant.toFixed(2) + " e agora custa R$ " + precoatual.toFixed(2) + ".</P>")
    document.write ( "<P>Hoje o produto está mais caro.</P>")
    document.write("<P> O preço subiu R$ " + variacao.toFixed(2) + " .</P>")
    document.write( "<P>Um aumento de " + variacao + "% </P>")
} 
if (precoant > precoatual) {
    document.write( "<P> O produto custava R$ " + precoant.toFixed(2) + "e agora custa R$" + precoatual.toFixed(2) + ".</P>")
    document.write ( "<P>Hoje o produto está mais barato.</P>")
    document.write("<P> O preço baixou R$ " + variacao.toFixed(2) + "  .</P>")
    document.write(" <P>Um variação de -" + variacao + "%</P>")

    }
}



/*

res.innerHTML = `<P> O produto custava R$ ${precoant.toFixed(2)} e agora custa R$ ${precoatual}.</P>`
res.innerHTML += `<P>Hoje o produto está mais caro.</P>`
res.innerHTML += `<P> O preço subiu R$ ${variacao.toFixed(2)}.</P>`
res.innerHTML += `<P>Um aumento de ${porcerto.toFixed(2)}%</P>`

if (precoant < precoant) {
    res.innerHTML = `<P> O produto custava R$ ${precoant} e agora custa R$ ${precoatual}.</P>`
    res.innerHTML += `<P>Hoje o produto está mais caro.</P>`
    res.innerHTML += `<P> O preço subiu R$ ${variacao}.</P>`
    res.innerHTML += `<P>Um aumento de ${variacao}%</P>`
} 
else (precoant > precoatual) {
    res.innerHTML = `<P> O produto custava R$ ${precoant} e agora custa R$ ${precoatual}.</P>`
    res.innerHTML += `<P>Hoje o produto está mais barato.</P>`
    res.innerHTML += `<P> O preço baixou R$ .</P>`
    res.innerHTML += `<P>Uma variação de - %</P>`
}*/


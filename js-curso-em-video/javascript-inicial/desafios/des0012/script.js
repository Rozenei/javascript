
function mudapreco() {
let precoant = parseFloat(prompt("Informe o preço anterior"))
let precoatual = parseFloat(prompt("Informe o preço antual"))
let variacao = precoatual - precoant
let porcento = (variacao / precoant) * 100

let res = document.querySelector("section#resultado")

  //porcetagem
  //valor é X por cento de Y  =  (valor / Y ) * 100
/*
if (variacao < 0){
    variacao = variacao * -1
}
if (precoant < precoatual) {
    document.write( "<P> O produto custava R$ " + precoant.toFixed(2) + " e agora custa R$ " + precoatual.toFixed(2) + ".</P>")
    
    document.write ( "<P>Hoje o produto está mais caro.</P>")

    document.write("<P> O preço subiu R$ " + variacao.toFixed(2) + " .</P>")

    document.write( "<P>Um aumento de " + porcento.toFixed(2) + "% </P>")
} 
if (precoant > precoatual) {
    document.write( "<P> O produto custava R$ " + precoant.toFixed(2) + "e agora custa R$" + precoatual.toFixed(2) + ".</P>")

    document.write ( "<P>Hoje o produto está mais barato.</P>")

    document.write("<P> O preço baixou R$ " + variacao.toFixed(2) + "  .</P>")

    document.write(" <P>Um variação de " + porcento.toFixed(2) + "%</P>")

    }*/

if (variacao < 0){
    variacao = variacao * -1
}

if (precoant < precoatual) {
res.innerHTML = `<P> O produto custava <strong>R$ ${precoant.toFixed(2)}</strong> e agora custa <strong>R$ ${precoatual.toFixed(2)}</strong> .</P>`

res.innerHTML += `<P> <P>Hoje o produto está mais <strong>caro</strong>.</P>`

res.innerHTML += `<P> O preço subiu <strong>R$ ${ variacao.toFixed(2)}</strong>.</P>`

res.innerHTML += `<P>Um aumento de <strong>${porcento.toFixed(2)} %</strong>. </P>`
}

if (precoant > precoatual) {
    res.innerHTML = `<P> O produto custava <strong>R$ ${precoant}</strong> e agora custa <strong>R$ ${precoatual}</strong>.</P>`

    res.innerHTML += `<P>Hoje o produto está mais <strong>barato</strong>.</P>`

    res.innerHTML += `<P> O preço baixou <strong>R$ ${variacao.toFixed(2)}</strong>.</P>`

    res.innerHTML += `<P>Um variação de <strong>${porcento.toFixed(1)} %</strong>.</P>`
 }
}

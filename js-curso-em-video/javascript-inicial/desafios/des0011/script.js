
function bissexto() {
let ano = Number(prompt("Digite um ano para ssaber se ele bissexto"))
let anobissex;
let naobissex; 


let res = document.querySelector("section#resultado")


if  (% (ano / 4) == 0 )  {

    res.innerHTML = `<P> O ano ${ano} é bissexto </P>`
} esif {
    res.innerHTML = `<P> O ano ${ano} não é bissexto </P>`

    }
}
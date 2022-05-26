
function bissexto() {
let ano = Number(prompt("Digite um ano para ssaber se ele bissexto"))

 
let res = document.querySelector("section#resultado")

if (ano % 4 == 0) {
    res.innerHTML = `<P>  O ano ${ano} <mark slyle = "backoundcolor: green;">É BISSEXTO</mark>✔️</P>`
} else {
    res.innerHTML = `<P> O ano ${ano} <mark slyle =" backoundcolor: red;" >NÃO É BISSEXTO </mark>❌</P>`
}

}

function calcula() {
    let numero = Number(prompt("Digite um número para saber se é par ou impar"))

    let res = document.querySelector("section#resultado")

    if (numero % 2 == 0 ) {
        res.innerHTML = `<P> O número <strong>${numero}</strong> é  <mark> PAR</mark></P>`
    }else {
        res.innerHTML = `<P> O número ${numero} é  <mark>IMPAR</mark></P>`

    }

}
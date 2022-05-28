
function interagindo() {
    let hora = new Date
    let res = document.querySelector("section#resultado")

    res.innerHTML = `<P> Recebi isso do sistema <mark>${hora}</mark>h</P>`
}
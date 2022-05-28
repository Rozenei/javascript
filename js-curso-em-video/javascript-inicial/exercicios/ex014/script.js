
function interagindo() {
    let hora = new Date().getHours();
    let res = document.querySelector("section#resultado")
    res.innerHTML = `<P> Recebi isso do sistema ${hora}</P>`
}
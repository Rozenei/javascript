
function idade() {
    let anonasc = Number(prompt("Em que ano você nasceu ?"))
    let agora = new Date
    let anoatual = agora.getFullYear()
    let idade = agora - anonasc

    let saida = document.querySelector("section#saida")
    saida.innerHTML = `<P>Você tem: ${idade} anos</P>`

}
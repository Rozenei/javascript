
function calcula() {
    let num1 = parseFloat(prompt("Digite o primeiro número"))
    let num2 = parseFloat(prompt("Digite o primeiro número"))

    let res = document.querySelector("section#resultado")

    if (num1 > num2) {
        res.innerHTML = `<P>Analizando os valores <strong>${num1.toFixed(2)}</strong> e<strong> ${num2.toFixed(2)}</strong>, o maior valor é <mark>${num1.toFixed(2)}</mark>.</P>`
    } else {
        res.innerHTML = `<P>Analizando os valores<strong> ${num1.toFixed(2)}</strong> e <strong>${num2.toFixed(2)}</strong>, o maior valor é <mark>${num2.toFixed(2)}</mark></P>`
    }

}
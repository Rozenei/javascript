
function aumento() {

    let nome = prompt("Qual é o nome do funcionário?")
    let salario = parseFloat(prompt("Qual é o salario dele?"))
    let porcento = parseFloat(prompt("De quantos porcento será aumento?"))
    let valaumento = ( salario / 100) * porcento
    let novosalario = salario + valaumento

    let reaj = document.querySelector("section#reajuste")

    reaj.innerHTML = `<P>O salário de ${nome} era R$ ${salario.toFixed(2)}</P>`
    reaj.innerHTML += `<P>Com o aumento de ${porcento}%, o salário dele vai aumentar R$ ${valaumento.toFixed(2)}</P>`
    reaj.innerHTML += `<P>A partir do próximo mês ${nome} vai passar a receber R$ ${novosalario.toFixed(2)}</P>`

}
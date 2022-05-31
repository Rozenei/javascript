
function calcular() {
    let num1 = Number(prompt("Digite o um número"))
    let num2 = Number(prompt("Digite o outro número"))

    let operacao = Number(prompt (`Valores informados: ${num1} e ${num2}. \n0 Qual cálculo você quer fazer ? \n[1] Somar \n[2]subtrair \n[3] dividir \n[4] multiplicar`))

    let saida = document.querySelector("section#saida")
    saida.innerHTML = `<h2>Calculando...</h2>`

    switch (operacao) {
        case 1:
            saida.innerHTML += `<P> ${num1} + ${num2} = <strong>${num1+num2}</strong></P>`
            break
        case 2:
            saida.innerHTML +=`<P>${num1} - ${num2} =<strong> ${num1-num2}</strong></P>`
            break
        case 3:
            saida.innerHTML +=`<P>${num1} / ${num2} = <strong>${num1/num2}</strong></P>`
            break
        case 4:
            saida.innerHTML +=`<P>${num1} * ${num2} = <strong>${num1*num2}</strong></P>`
            break
    }

  
  
}


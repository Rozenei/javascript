
function calcular() {
    let n1 = document.getElementById("num1")
    let n2 = document.getElementById("num2")
    let res = document.getElementById("res")

    let soma = n1 + n2
    let subt = n1 - n2
    let mult = n1 * n2
    let divi = n1 / n2

    res.innerHTML = `Calculando...`
    if(n1.value.length == 0 || n2.value.length == 0) {
        alert("ERRO")
    }
        let fcalc = document.getElementsByName("radcalc")
        n1 = Number(n1.value)
        n2 = Number(n2.value)
  
     if(fcalc[0].checked){
        fcalc = soma
        soma = n1 + n2
        res.innerHTML += ` <P>O resultado de ${n1} + ${n2} é <strong><mark>${soma.toFixed(2)}</mark></P></strong>`

    }else if(fcalc[1].checked) {
        fcalc = subt
        subt = n1 - n2
        res.innerHTML += ` <P>O resultado de ${n1} - ${n2} é <strong><mark> ${subt.toFixed(2)}</P></mark></strong>`

    }if(fcalc[2].checked) {
        fcalc = mult
        mult = n1 * n2
        res.innerHTML += ` <P>O resultado de ${n1} * ${n2} é <strong><mark>${mult.toFixed(2)}</P></mark></strong>`

    }if(fcalc[3].checked) {
        fcalc = divi
        divi = n1 / n2
        res.innerHTML += `<P> O resultado de ${n1} / ${n2} é <strong><mark>${divi.toFixed(2)}</mark></P></strong`
    }
    
}
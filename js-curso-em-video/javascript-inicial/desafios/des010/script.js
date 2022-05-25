
function formula() {
    let a = parseFloat(prompt("Qual é o valor de A?"))
    let b = parseFloat(prompt("Qual é o valor de B?"))
    let c = parseFloat(prompt("Qual é o valor de C?"))
    let coeficiente1 ;
    let coeficiente2 ;

    let delta = (b * b) - 4 * a * c

    coeficiente1 = (-b + Math.sqrt (delta)) / (2 * a)
    coeficiente2 = (-b - Math.sqrt (delta)) / (2 * a)


    let res = document.querySelector("section#resultado")

    res.innerHTML = `<P> A equação atual é ${a}x<sup>2</sup> + ${b}x + 2 = 0</P>`
    res.innerHTML += `<P> O cálculo realizado será &#916; = ${a}<sup>2</sup> + ${b}x + ${c} = 0</P>`
    res.innerHTML += `<P> O valor calculado foi <mark> &#916; </mark> = ${delta}</P>`
    res.innerHTML += `<P> O valor de <mark> X ' </mark> é ${coeficiente1.toFixed(4)}</P>`
    res.innerHTML += `<P> O valor de <mark>X ''</mark> é ${coeficiente2.toFixed(4)}</P>`


   

    
    

}
    /*
    if (a < 0) {

        console.log("A equação não possui raizes reais")

    } elsif  { 
        alert("Para Delta positivo, raizes diferentes ")
     
        coeficiente1 = (-b - Math.sqrt(delta) / (2 * a))
        coeficiente2 = (-b + Math.sqrt(delta) / (2 * a)) 
    } 
*/
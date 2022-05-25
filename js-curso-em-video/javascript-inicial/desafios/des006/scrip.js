
function temperatura() {
    let temp = parseFloat(prompt("Informe a temperatura em °C (Celcios)"))
    let res = document.querySelector("section#resultado")
    let fahre = (temp * 1.8) + 32
    let kelv = temp + 273

    

    res.innerHTML = `<P><strong>A temperatura de ${temp}<sup>°</sup>C, (Celcios)  correnponde a...</strong></P>`
    res.innerHTML += `<P>${fahre}<sup>°</sup>F (Fahrenheit)</P>`
    res.innerHTML += `<P>${kelv}<sup>°</sup>K  (Kelvin)</P>`

}
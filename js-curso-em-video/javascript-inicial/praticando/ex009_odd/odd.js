
function calcular() {
    let v = document.getElementById("num1")
    let oe = document.getElementById("odd")
    let os = document.getElementById("odd2")
    let res = document.getElementById("res")

    res.innerHTML = `Calculando...<P>`

    v = Number(v.value)
    oe = Number(oe.value)
    os = Number(os.value)

    let xb = valor / oe
    let yb = xb  * os
    let lucro = xy - xb 
    alert(lucro)

    res.innerHTML += `O lucro é de: ${lucro} `

    
}
        


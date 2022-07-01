
function calcula() {
    let v = document.getElementById("num1")
    let oe = document.getElementById("odd")
    let os = document.getElementById("odd2")
    let res = document.getElementById("res")

    res.innerHTML = `Calculando...<P>`

    v = Number(v.value)
    oe = Number(oe.value)
    os = Number(os.value)

    let xb = v / (oe - 1)
    let yb = (xb / 2) * (os - 1)
    let lucroB = yb - v
    let lucro = lucroB - (lucroB / 100 * 6.5 )
    
    res.innerHTML = `O lucro é de: <strong>${lucro.toFixed(2)}</strong>`


   }     
    
   
        


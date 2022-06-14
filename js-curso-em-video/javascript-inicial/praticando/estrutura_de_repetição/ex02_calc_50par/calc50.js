
function somar() {
    let inicio = 2
    let num  
    let cont 

    let res = document.getElementById("res")
    for (num % 2 == 0) {
        inicio += 2
    }
    res.innerHTML = `a soma é ${inicio}`
}
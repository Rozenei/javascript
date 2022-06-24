
function tabuada() {
    let numtab = Number(document.getElementById("tabuada").value)
    res.innerHTML = `<P>Tabuada do ${numtab}</p>`

    let cont = 1
     
    for(let tab = numtab; cont <= 10; cont++) {
        res.innerHTML += ` ${tab} x ${cont} = ${tab * cont} <br>`
    }
}
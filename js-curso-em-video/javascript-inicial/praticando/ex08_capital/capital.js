
function capital() {
    let res = document.getElementById("res")
    res.innerHTML = `Verificando...`

    let est = document.getElementsByName("estado")

    if (est[0]) {
        res.innerHTML = `A capital é Curitiba`
    }
}

function capital() {
    let res = document.getElementById("res")
    res.innerHTML = `Verificando...`

    let est = document.getElementById("estado").value
    let sp = document.getElementById("sp").value
    let pr = document.getElementById("pr").value
    let sc = document.getElementById("sc").value
    let rs = document.getElementById("rs").value
    
    if (est = pr ) {
        res.innerHTML = `A capital se ${pr} é Curitiba `
    }else if (est = sc) {
        res.innerHTML = `A capital se ${sc} é Florianópolis`
    }else if (est = rs) {
        res.innerHTML = `A capital se ${rs} é Porto Alegre`
    }else  if (est = sp) {
        res.innerHTML = `A capital de ${sp} é São Paulo`
    }

}
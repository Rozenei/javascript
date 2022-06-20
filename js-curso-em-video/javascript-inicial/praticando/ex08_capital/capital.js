
function capital() {
    let res = document.getElementById("res")
    res.innerHTML = `Verificando...`

    let est = document.getElementsByName("estado")
    let pr = "Paraná"
    let sc = "Santa Catarina"
    let rs = "Rio Grande do Sul"
    
    if (est = pr) {
        res.innerHTML = `A capital se ${pr} é Curitiba `
    } if (est = sc) {
        res.innerHTML = `A capital se ${sc} é Florianópolis`
    }if (est = rs) {
        res.innerHTML = `A capital se ${rs} é Porto Alegre`
    }

}
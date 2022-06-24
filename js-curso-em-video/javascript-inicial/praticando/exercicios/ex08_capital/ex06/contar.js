
function contar() {
    let ini = document.getElementById("txti")
    let fin = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fin.value.length == 0 || passo.value.length == 0) {
        alert("[Erro] Verifique os dados e tente novamente!")
    }else {
        res.innerHTML = `<P>Contando</P>`
        let numini = Number(ini.value)
        let numfin = Number(fin.value)
        let pas = Number(passo.value)
        
       if (pas <= 0) {
            alert("Passo inválido! Considerar passo 1")
            pas = 1
       }

        if (numini < numfin) {
            //contagem crescente
            for (let cont = numini; cont <= numfin; cont += pas) {
            res.innerHTML += ` ${cont}, \u{1F449} `
           }
        } else {
            //contagem regressiva
            for (let cont = numini; cont >= numfin; cont -= pas) {
                res.innerHTML += `${cont}, \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3c1} `   
    }
   
}
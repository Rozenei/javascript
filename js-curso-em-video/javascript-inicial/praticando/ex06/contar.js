
function contar() {
    let numIni = Number(document.getElementById("txti").value)
    let numFin = Number(document.getElementById("txtf").value)
    let pas = Number(document.getElementById("txtp").value)
    

    if (numIni.value.length == 0 || numFin.value.length == 0 || pas.value.length == 0) {
        alert("Erro")
    }else {
        alert("OK")
    }
     
}
    
    

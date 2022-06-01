
function estacao() {
    let mes = prompt("Para saber a estação digite o mês em extenso (exemplo: Maio)")
    let saida = document.querySelector("section#saida")
    let estacao
    switch (mes.toUpperCase()) {
        case "SETEMBRO":  case "OUTUBRO":  case "NOVEMBRO":  case "DEZEMBRO":
            estacao = "Primavera"
            break

        case "DEZEMBRO": case "JANEIRO":  case "FEVEREIRO":  case "MARÇO":
            estacao = "Verão"
            break

        case "MARÇO": case "ABRIL": case "MAIO": case "JUNIO":
        estacao = "Outono"
        break
        
        case "JUNHO": case "JULHO": case "AGOSTO": case "SETEMBRO": 
        estacao = "Inverno"
        break
        
    }
    saida.innerHTML =  `<P>No mês de <strong>${mes}</strong> estamos na estação <mark>${estacao}</mark></P>`
    
}

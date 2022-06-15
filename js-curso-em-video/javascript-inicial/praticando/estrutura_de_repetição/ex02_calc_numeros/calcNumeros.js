
function somar() {
    let res = document.getElementById("res")
    res.innerHTML += `<h2>Somando</h2> <br>`
    let limit = Number(document.getElementById("num").value) * 2 
    
    let soma = 0
    let cont = 1
    let n = "" 
    let med
    let fnum = document.getElementsByName("radnum")

    while ( cont <= limit ) {
        if (fnum[0].checked ) {
            n = "pares"
        if(cont % 2 == 0)
            soma = soma + cont
            cont = cont + 1
        let med = soma / limit 

        } else if (fnum[1].checked) {
            n = "impares"
            if(cont % 2 != 0)
            soma = soma + cont 
            cont = cont + 1
            let med = soma / limit 

        }
       
       
    }  
    limit = limit / 2
    med = soma / limit
    res.innerHTML = `O resultado da soma dos <strong>${limit}</strong> primeiros números <strong>${n}</strong> é <strong><mark>${soma}</mark></strong> <br> e a média deles é <mark>${med}</mark>`
   
}


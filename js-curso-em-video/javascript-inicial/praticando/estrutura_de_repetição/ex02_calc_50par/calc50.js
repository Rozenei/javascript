
function somar(x) {
    let res = document.getElementById("res")
    res.innerHTML += `<h2>Somando</h2> <br>`

    let soma = 0
    for(let cont = 2; cont <= x; cont += 2) {
        
        soma = soma + cont
        res.innerHTML = `A soma é <br> ${soma(10)} `
       
       
    }  
   // res.innerHTML = `A soma é <br> ${soma} `
   
}

function fibonacci(){
    let limit = Number(document.getElementById("num").value)
    let res = document.getElementById("res")
    res.innerHTML = `Sequência de Fibonacci`
    let pen = 0
    let ult = 1
    let numf ;
    
    if (limit <= 2)
        numf = limit - 1
    else {
        cont = 3  
    }
    while(cont <= limit) {

        numf = ult + pen 
        pen = ult
        ult = numf
        cont++ 
        res.innerHTML += ` ${numf} ,  `
    }
    
}
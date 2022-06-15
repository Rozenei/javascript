
function fibonacci(){
    let res = document.getElementById("res")
    res.innerHTML = `Sequência de Fibonacci`
    let x = 0
    let y = 1
    let f ;
    
   cont = 3 
    while(cont < 10) {

        f = y + x
        x = y
        y = f
        cont++ 
        res.innerHTML += ` ${f} ,  `
       
    }
     
}
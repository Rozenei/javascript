
function fibonacci(){
    let res = document.getElementById("res")
    res.innerHTML = `Sequência de Fibonacci`
    let x = 0
    let y = 1

    let f = x 
    
   // let x = a + b // x = 0 + 1 / x = 1
   // let y = x + x  // y = 1 + 1  / Y = 2
   // let f = x + y // F = 1 + 2
   
    let cont = 0
    while(cont < 10) {
        
        y = y + (y+x)
        
        res.innerHTML += ` <br> ${f} `
        f = x+y
        cont++
        
    }
     
}
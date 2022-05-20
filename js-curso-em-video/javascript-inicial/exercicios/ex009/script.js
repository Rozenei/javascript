
let contador = 0  
let res = document.getElementById("resultado")

function contar() {
    contador ++
    res.innerHTML = `<P> O contador está com <<mark>${contador}</mark> cliques. </P>`
 }
 function zerar() {
     contador = 0
     res.innerHTML = null
 }
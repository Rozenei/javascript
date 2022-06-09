
function tabuada() {
    let num = Number(document.getElementById("fnum").value) 
    let saida = document.getElementById("saida")
    let cont = 1 
    
   saida.innerHTML = `<h2>Taboada do ${num}</h2>`
  while (cont <= 10) {
      saida.innerHTML += `<P>${num} x ${cont} = <strong>${num * cont}</strong></P>`
       cont++
   }

    
}
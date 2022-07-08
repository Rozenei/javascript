
function votar() {
    let idade = document.getElementById("idade")
    let saida = document.getElementById("saida")
   
    
    if(idade.value.length == 0) {
       alert("ERRO!")
    }else {
         idade = Number(idade.value)
    }
        if (idade < 16) {
        saida.innerHTML = `Você tem ${idade} você não vota `
        }if (idade < 18 && idade > 15 || idade > 65) {
        saida.innerHTML = `Você tem ${idade} o voto é opcional`
        }if (idade > 17 && idade < 66)  {
        saida.innerHTML = `Você tem ${idade} o voto é obrigatório`
        }
    
}
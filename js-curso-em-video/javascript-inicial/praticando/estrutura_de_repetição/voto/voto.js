
function votar() {
    let idad = document.getElementById("idade")
    let saida = document.getElementById("saida")
  
    if (idade.value.length == 0) {
         alert("[ERRO]! Verifique os dados e tente novamente")
    }else {
        saida.innerHTML = `Analizando voto...`
        let = idade = Number(idad.value)
    }
     if (idade > 15 && idade < 18 || idade > 70) {
        saida.innerHTML = `Sua idade é ${idade} o voto é opcional`
    }else if (idade < 16) {
        saida.innerHTML = `Sua idade é ${idade} você não vota`
    }else {
        saida.innerHTML = `Sua idade é ${idade} o voto é obrigatório`
    }
}
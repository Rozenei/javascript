
function votar() {
    let idade = document.getElementById("idad")
    let saida = document.getElementById("saida")

    if (idade > 15 && idade < 18 || idade > 70) {
        saida.innerHTML = `O voto é opcional`
    }else if (idade < 16) {
        saida.innerHTML = `Não vota`
    } else if(idade > ) {
        saida.innerHTML = `O voto é obrigatório`
    }
}
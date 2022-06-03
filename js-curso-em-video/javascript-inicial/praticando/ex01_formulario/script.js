

function formulario() {
    let saida = document.getElementById("saida")
    let nome = document.getElementById("fname").value
    let sobNome = document.getElementById("lname").value
   
    saida.innerHTML += ` <P>Cadastro realizado ${nome} ${sobNome} </P> `

}
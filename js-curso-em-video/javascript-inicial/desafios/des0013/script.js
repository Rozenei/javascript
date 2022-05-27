
function situacao() {
    aluno = prompt("Informe o nome do aluno (a)")
    nota1 = parseFloat(prompt("Informe a primeira nota"))
    nota2 = parseFloat(prompt("Informe a segunda nota"))
    nota3 = parseFloat(prompt("Informe a terceira nota"))
    nota4 = parseFloat(prompt("Informe a quarta nota"))
    media =( nota1 + nota2 + nota3 + nota4) / 4

    let res = document.querySelector("section#resultado")

    res.innerHTML = `<P> Analisando  situação de ${aluno}</P>` 
    res.innerHTML += `<P> Com as notas ${nota1.toFixed(1)}, ${nota2.toFixed(1)}, ${nota3.toFixed(1)}, e ${nota4.toFixed(1)} a media é ${media.toFixed(1)}. </P>`

    if (media < 3) {
       
        res.innerHTML += `<P> A media está abaixo de 3 o aluno está REPROVADO</P>`       
    } if (media >= 3 && media < 6) {
        res.innerHTML += `<P> A media está entre 3 e 6 o aluno está de RECUPERAÇÃO</P>`
    } if (media > 6) {
        res.innerHTML += `<P> A media está acima de 6 o aluno está APROVADO</P>`
    }

}
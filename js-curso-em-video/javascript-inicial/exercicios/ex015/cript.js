
function dataHora() {
    let meses = new Array ("jan", "fev", " mar", " abr", " mai", "jun ", " jul", "ago ", " set", " out", "nov ", "dez ", )

    let semana = new Array ( " dom", " seg", "ter ", "qua ", "qui ", "sex ", "sab ",)
    
    let agora = new Date
    let saida = document.querySelector("section#saida")
    let dia = agora.getDate()
    let mes = agora.getMonth()//jan = 0 | fev = 1 | mar = 2 ...
    let ano = agora.getFullYear()// dom = 0 | seg = 1| ter = 2 ...
    let sem = agora.getDay()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()

    saida.innerHTML = `<P>Dia: <mark>${dia}</mark></P>` 
    saida.innerHTML += `<P>Mês: <mark>${meses[mes]}</mark></P>` 
    saida.innerHTML += `<P>Ano: <mark>${ano}</mark></P>` 
    saida.innerHTML += `<P>Dia da semana: <mark>${semana[sem]}</mark></P>` 
    saida.innerHTML += `<P>Hora: <mark>${hora}</mark></P>` 
    saida.innerHTML += `<P>Minuto: <mark>${min}</mark></P>` 
    saida.innerHTML += `<P>Segundos: <mark>${seg}</mark></P>` 
   
}
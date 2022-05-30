
function dataHora() {
    let meses = new Array ("jan", "fev", " mar", " abr", " mai", "jun ", " jul", "ago ", " set", " out", "nov ", "dez ", )
    let dias = new Array (" seg", "ter ", "qua ", "qui ", "sex ", "sab ", " dom",)
    let agora = mew Date
    let saida = document.querySelector("saida")
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()

    saida.innerHTML = `<P>Dia: <mark></mark>${}</P>` 
    saida.innerHTML = `<P>Mês: <mark></mark>${}</P>` 
    saida.innerHTML = `<P>Ano: <mark></mark>${}</P>` 
    saida.innerHTML = `<P>Dia da semana: <mark></mark>${}</P>` 
    saida.innerHTML = `<P>Hora: <mark></mark>${}</P>` 
    saida.innerHTML = `<P>Minuto: <mark></mark>${}</P>` 
    saida.innerHTML = `<P>Segundos: <mark></mark>${}</P>` 


    
    
}
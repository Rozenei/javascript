
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    
    if (fano.value.length == 0 || fano.value > ano){
        alert("Verifique os dados e tente novamente")
    }else {
       var fsex = document.getElementsByName("radsex")
       var idade = ano - Number(fano.value)
       var genero = ""
       var img = document.createElement("img")
        img.setAttribute('id', 'foto')

       if (fsex[0].checked){
           genero = "Homem"
           if (idade >= 0 && idade < 12){
               //criança
               img.setAttribute("src","imagem/menino_criança.jpg")
           }else if (idade > 12 && idade < 30) {
               img.setAttribute("src", "imagem/homem18a30.jpg")
               //jovem
           }else if (idade => 30 && idade <= 50) {
               img.setAttribute("src" , "imagem/homem0a50.jpg")
               //adulto
           }else {
               img.setAttribute("src", "imagem/homem60+.jpg")
               //idoso
           }
       }else if (fsex[1].checked) {
           genero = "Mulher"
           if (idade >= 0 && idade < 12){
               img.setAttribute("src","imagem/menina_criança.jpg")
            //criança
        }else if (idade > 12 && idade <= 29) {
            img.setAttribute("src", "imagem/mulher18a30.jpg")
            //jovem
        }else if (idade => 30 && idade <= 50) {
            img.setAttribute("src", "imagem/mulher30a50.jpg")
            //adulto
        }else {
            img.setAttribute("src","imagem/mulher60+.jpg")
            //idoso
        }
       }

       res.innerHTML = `<P> Detectado ${genero} com ${idade} anos </P>`
       
       res.appendChild(img)
    }

}
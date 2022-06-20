
let img = document.createElement("img")
img.setAttribute("id", "foto")


function lacosWhile() {
    let img = document.createElement("img")
    img.setAttribute("id", "foto")
    img.setAttribute("src", "imagem/while.PNG")

    let While = document.getElementById("while")
    let c = 1
   
    while (c <= 10) {//enquanto c <= 10 faça isso
    img.setAttribute("src", "imagem/while.PNG")
        While.innerHTML += `<p>Testando laços com <strong>While</strong>  </p>`
        c++        
    }   
}

function lacosDoWhile() {
    let doWhile = document.getElementById("dowhile")
    let c = 1
    do {//faça isso
        doWhile.innerHTML += `<p> Testando laços com <strong>do while</strong> `
        c++
    } while(c <= 10)//enquanto c <= 10
      
}
function lacosFor() {
    let For = document.getElementById("for")
    for (let c = 1; c <= 10; c++)
    For.innerHTML += `<p>Testando laços com <strong>For</strong></p>`
}
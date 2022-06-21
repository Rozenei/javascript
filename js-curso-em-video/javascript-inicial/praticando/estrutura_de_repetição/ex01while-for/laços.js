



function lacosWhile() {
    let While = document.getElementById("while")
    let x1 = Number(document.getElementById("num1").value) 
    let texto = document.getElementById("while")
    let c = 1
   
    while (c <= x1) {//enquanto c <= 10 faça isso
        While.innerHTML += `<p> ${texto}  <strong>While</strong>  </p>`
        c++        
    }   
}

function lacosDoWhile() {
    let doWhile = document.getElementById("dowhile")
    let x2 = Number(document.getElementById("num2").value) 
    let c = 1
    do {//faça isso
        doWhile.innerHTML += `<p> Testando laços com <strong>do while</strong> `
        c++
    } while(c <= x2)//enquanto c <= 10
      
}
function lacosFor() {
    let For = document.getElementById("for")
    let x3 = Number(document.getElementById("num3").value) 

    for (let c = 1; c <= x3; c++)
  
    For.innerHTML += `<p>Testando laços com <strong>For</strong></p>`
}

function imgWhile() {
    let res = document.getElementById("res")
    let img = document.createElement("img")
    
    // img.setAttribute("id", "foto")
   
    img.setAttribute("src",  "imagem/while.PNG")
    res.appendChild(img)
   

}
function imgDoWhile() {
    let res = document.getElementById("res2")
    let img = document.createElement("img")
    
    // img.setAttribute("id", "foto")

    img.setAttribute("src", "imagem/do_while.PNG") 
    res.appendChild(img)
}
function imgFor() {
    let res = document.getElementById("res3")
    let img = document.createElement("img")

    // img.setAttribute("id", "foto")

    img.setAttribute("src","imagem/for.PNG")    
    res.appendChild(img)
}
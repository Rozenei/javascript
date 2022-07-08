
function lacosWhile() {
    let While = document.getElementById("while")
    let x1 = Number(document.getElementById("num1").value) 
    let texto = document.getElementById("txt1").value
    let c = 1
   
    while (c <= x1) {//enquanto c <= 10 faça isso
        While.innerHTML += `<p> <strong>${texto}</strong>  </p>`
        c++        
    }   
}

function lacosDoWhile() {
    let doWhile = document.getElementById("dowhile")
    let x2 = Number(document.getElementById("num2").value) 
    let texto2 = document.getElementById("txt2").value
    let c = 1
    do {//faça isso
        doWhile.innerHTML += `<p> <strong>${texto2}</strong> </p> `
        c++
    } while(c <= x2)//enquanto c <= 10     
}
function lacosFor() {
    let For = document.getElementById("for")
    let x3 = Number(document.getElementById("num3").value) 
    let texto3 = document.getElementById("txt3").value
    
    for(let c = 1; c<= x3; c++)
    For.innerHTML += `<p> <strong>${texto3}</strong> </p>`
}
function imgWhile() {
    let res = document.getElementById("res")
    let img = document.createElement("img")
    
    img.setAttribute("src",  "imagem/codigo_while.PNG")
    res.appendChild(img)
}
function imgDoWhile() {
    let res = document.getElementById("res2")
    let img = document.createElement("img")
    
    img.setAttribute("src", "imagem/codigo_dowhile.PNG") 
    res.appendChild(img)
}
function imgFor() {
    let res = document.getElementById("res3")
    let img = document.createElement("img")

    img.setAttribute("src","imagem/codigo_for.PNG")    
    res.appendChild(img)
}
function codhtml() {
    let res = document.getElementById("reshtml")
    let img = document.createElement("img")

    img.setAttribute("src", "imagem/cod_html.PNG")
    res.appendChild(img)
}
function codcss() {
    let res = document.getElementById("rescss") 
    let img = document.createElement("img")

    img.setAttribute("src", "imagem/cod_css.PNG")
    res.appendChild(img)
}
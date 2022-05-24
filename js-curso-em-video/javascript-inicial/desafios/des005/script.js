
function conversor() {
    let dist = parseFloat(prompt("Digite uma distância em metros"))
    let res = document.getElementById("resultado")

    let km = dist / 1000
    let hm = dist * 10
    let dam = dist * 100
    let cm = dist * 100
    let mm = dist * 1000

    

    res.innerHTML =  `<P>A distância de ${dist} metros, corresponde a...</P>`
    res.innerHTML += `<P>${km} quilometros (Km)</P>` 
    res.innerHTML += `<P>${hm} hectômetros (Hm)</P>` 
    res.innerHTML += `<P>${dam} decâmetros (Dam)</P>`
    res.innerHTML += `<P>${cm} centimetros (cm)</P>`
    res.innerHTML += `<P>${mm} milimetros (mm)</P>`

};
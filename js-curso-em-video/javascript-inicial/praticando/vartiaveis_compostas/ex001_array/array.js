function carros() {
    let select = document.querySelector("#carros")
    let res = document.querySelector("div#res")

    let indice = select.selectedIndex
    let valor = select.value
    let text = select.options[indice].text
    res.innerHTML = ` O carro selecionado foi: <strong>${text}</strong> ${valor} Posição ${indice}`
}
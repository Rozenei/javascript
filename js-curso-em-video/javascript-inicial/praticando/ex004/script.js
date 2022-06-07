
function verificar() {
    var data = new Date()
    var ano = data.getFullYer()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente");
    }else {
       window.alert("Tudo certo, pode começar");
    }
    

}
window.onload = function() {
    var botaoAltera = document.getElementById("botao-altera")

    botaoAltera.addEventListener("click", function(){
        var titulo = document.getElementById("input-titulo")
        var titulosPagina = document.getElementsByTagName("h1")
        Object.values(titulosPagina).forEach(function (tituloPagina) {
            tituloPagina.innerHTML = titulo.value
        });
    })

}
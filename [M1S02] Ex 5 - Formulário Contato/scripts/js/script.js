window.onload = function() {
    var botaoAside = document.getElementById("apareceBotao")
    botaoAside.onmouseover = function () {
        var mostraAside = document.getElementById("apareceDiv")
        mostraAside.style.width = "400px"
        mostraAside.style.height = "400px"
        mostraAside.style.display = "flex"
    }

    var mostraAside = document.getElementById("apareceDiv")
    mostraAside.onmouseleave = function (){
        var mostra = document.getElementById("apareceDiv")
        mostra.style.width = "0px"
        mostra.style.height = "0px"
        mostra.style.display = "none"
    }
}
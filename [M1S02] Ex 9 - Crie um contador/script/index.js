window.onload = function() {
    var botaoDecrementar = document.getElementById("decrementa")
    var botaoIncrementar = document.getElementById("incrementa")
    var pvalor = document.getElementById("p-valor")

    var valor = 0

    botaoDecrementar.addEventListener("click", function(){
        valor -= 1
        pvalor.innerHTML = valor
    })

    botaoIncrementar.addEventListener("click", function(){
        valor += 1
        pvalor.innerHTML = valor
    })

}
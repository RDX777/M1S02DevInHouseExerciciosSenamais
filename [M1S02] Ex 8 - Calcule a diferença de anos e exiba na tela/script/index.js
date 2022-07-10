window.onload = function() {
    var ano = window.prompt('Digite ano'); 
    var anoAtual = new Date().getFullYear()
    diferenca = anoAtual - ano
    alert(`A diferença de anos são: ${diferenca}`)
}
window.onload = function() {
    var botaoEnviar = document.getElementById("botao-enviar")

    botaoEnviar.addEventListener("click", function(event){
        event.preventDefault()
        var nome = document.getElementById("nome").value
        var email = document.getElementById("email").value
        var descricao = document.getElementById("descricao").value
        console.log(`Formulário de contato => Nome: ${nome} - E-mail: ${email} - Descrição: ${descricao}`)
        alert("Formulario enviado com sucesso!")
      });

}
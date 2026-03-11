const form = document.getElementById("formContato");
const status = document.getElementById("status");
const botao = document.getElementById("botaoEnviar");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome.length < 3){
        mostrarStatus("Nome muito curto 🤨", "red");
        return;
    }

    if(!email.includes("@")){
        mostrarStatus("Email inválido 😬", "red");
        return;
    }

    if(mensagem.length < 10){
        mostrarStatus("Mensagem muito curta 😅", "red");
        return;
    }

    botao.innerText = "Enviando...";

    setTimeout(() => {

        botao.innerText = "Enviado 🚀";
        mostrarStatus("Mensagem enviada com sucesso!", "green");

        form.reset();

    }, 1500);

});

function mostrarStatus(texto, cor){

    status.innerText = texto;
    status.style.color = cor;

}
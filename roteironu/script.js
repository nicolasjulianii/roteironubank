function mostrarTela(id) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}


function iniciarAtendimento() {

    mostrarTela("cliente");

}


function selecionarCliente(tipo) {

    console.log("Tipo selecionado:", tipo);

    mostrarTela("tratativa");

}


function abrirFluxo(tipo) {

    const titulo = document.getElementById("tituloFluxo");
    const texto = document.getElementById("textoFluxo");

    if (tipo === "promessa") {

        titulo.textContent = "Promessa de pagamento";

        texto.textContent =
            "TEXTO DEMONSTRATIVO — inserir aqui a fala oficial autorizada para este fluxo.";

    }

    if (tipo === "rdp") {

        titulo.textContent = "Renegociação";

        texto.textContent =
            "TEXTO DEMONSTRATIVO — inserir aqui a fala oficial autorizada para este fluxo.";

    }

    if (tipo === "recusa") {

        titulo.textContent = "Cliente não aceita";

        texto.textContent =
            "TEXTO DEMONSTRATIVO — inserir aqui o fluxo oficial autorizado.";

    }

    mostrarTela("fluxo");

}


function copiarTexto() {

    const texto = document.getElementById("textoFluxo").textContent;

    navigator.clipboard.writeText(texto);

    alert("Texto copiado!");

}


function encerrar() {

    mostrarTela("encerramento");

}


function novoAtendimento() {

    mostrarTela("inicio");

}
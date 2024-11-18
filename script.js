document.getElementById("formSenha").addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeCompleto = document.getElementById("nomeCompleto").value.trim();

    if (!validarNome(nomeCompleto)) {
        exibirResultado("Por favor, insira o nome completo.", "danger");
        return;
    }

    const sobrenome = obterSobrenome(nomeCompleto);
    const totalVogais = contarVogais(nomeCompleto);

    const senhaInicial = `${sobrenome}${totalVogais}`;
    exibirResultado(`Senha inicial gerada: <strong>${senhaInicial}</strong>`, "success");
});

function validarNome(nome) {
    return nome.split(" ").length >= 2;
}

function obterSobrenome(nome) {
    const partes = nome.split(" ");
    return partes[partes.length - 1].toLowerCase();
}

function contarVogais(nome) {
    const vogais = nome.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
    const total = vogais ? vogais.length : 0;
    return total.toString().padStart(2, "0");
}

function exibirResultado(mensagem, tipo) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

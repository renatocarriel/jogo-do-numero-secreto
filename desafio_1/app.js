let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function botaoConsole() {
    console.log('o botão console foi clicado');
}

function botaoAlert() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Eu estive na cidade de ${cidade} este ano.`);
}

function botaoSoma() {
    let numero1 = parseInt(prompt('Digite um valor para o primeiro numero'));
    let numero2 = parseInt(prompt('Digite um valor para o segundo numero'));
    let resultado = numero1 + numero2;
    alert(`A soma de ${numero1} com ${numero2} é igual a ${resultado}`)
}
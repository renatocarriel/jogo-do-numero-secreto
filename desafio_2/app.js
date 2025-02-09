function olaConsole() {
    console.log("olá Mundo");
}
olaConsole();

function olaConsoleNome(nome) {
    console.log(`olá ${nome}!`);
}

olaConsoleNome("Renato");

function dobroNumero(numero) {
    let dobro = numero * 2;
    return console.log(`O dobro de ${numero} é ${dobro}`);
}

dobroNumero(5);

function calculaMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return console.log(`A média de ${n1}, ${n2} e ${n3} é ${media}`);
}

calculaMedia(5, 1, 10);

function numeroMaior(a1, a2) {
    if (a1 > a2) {
        return console.log(`O numero ${a1} é maior que ${a2}`);
    } else {
        return console.log(`O numero ${a2} é maior que ${a1}`);
    }
}

numeroMaior(5, 10);

function multiplicaEleMesmo(b1) {
    let multiplicado = b1 * b1;
    return console.log(`O resultado do numero ${b1} multiplicado por ele mesmo é ${multiplicado}`);
}

multiplicaEleMesmo(61);
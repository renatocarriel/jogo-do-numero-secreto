function imc(altura, peso) {
    let valorimc = peso / (altura * altura);

    if (valorimc < 18.5) {
        console.log("Abaixo do peso normal");
    }
    if (valorimc >= 18.5 && valorimc < 25) {
        console.log("Peso normal");
    }
    if (valorimc >= 25 && valorimc < 30) {
        console.log("Excesso de peso");
    }
    if (valorimc >= 30 && valorimc < 35) {
        console.log("Obesidade Classe 1");
    }
    if (valorimc >= 35 && valorimc < 40) {
        console.log("Obesidade classe 2");
    }
    if (valorimc >= 40) {
        console.log("Obesidade Classe 3");
    }

}

imc(1.74, 116);  

function calculaFatorial(produto) {
    let resultadoFatorial = produto;
    while (produto >= 1) {
        resultadoFatorial = resultadoFatorial * produto;
        produto--;
    }
    
    console.log(`O fatorial de ${produto} é igual a ${resultadoFatorial}`);
}

calculaFatorial(60);



function calculaCambioDolar(dolar) {
    let valorEmReal = dolar * 4.8;
    return console.log(`A conversão de U$${dolar} equivale a R$${valorEmReal},00`);
}

calculaCambioDolar(300);

function calculaAreaPerimetro(ladoA, ladoB) {
    let perimetro = (ladoA * 2) + (ladoB * 2);
    let area = ladoA * ladoB;

    console.log(`A area é ${area}`);
    console.log(`O perimetro é de ${perimetro}`)
}

calculaAreaPerimetro(5,2);

function calculaRaio(raio) {
    let raioArea = Math.PI * raio * raio;
    let raioPerimetro = 2 * Math.PI * raio;

    console.log(`Área da sala circular: ${raioArea.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${raioPerimetro.toFixed(2)} metros`);

}

calculaRaio(4);

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
}
mostrarTabuada(5);
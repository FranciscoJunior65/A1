
console.log('Olá, seja bem vindo ao Cálculo IMC...');

function main() {
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularIMC(peso, altura) {
    const resultImc = peso / (altura*altura);
    return resultImc.toFixed(2);
}

readline.question('Digite seu peso ', function (pesoInput) {
    readline.question('Digite sua altura ', function(alturaInput){
        const imc = calcularIMC(pesoInput, alturaInput);
        let imcDesc = '';
        
        if (imc <= 18.5){
            imcDesc = 'Você esta com Magreza';
        } else if (imc > 18.5 && imc <= 24.9){
            imcDesc = 'Você esta com o peso Normal';
        } else if (imc > 24.9 && imc <= 30){
            imcDesc = 'Você esta Sobrepeso';
        } else if (imc > 30){
            imcDesc = 'Você esta com Obesidade';
        }
        
        console.log('Seu IMC é ' + imc + ' kg/m2. ' + imcDesc);
        readline.close();
    });
});        
    
}

main();

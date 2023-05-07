

console.log('Olá, seja bem vindo ao app...');

function main() {
txtNome = 'FranciscoDev';
console.log(typeof (txtNome));
console.log(txtNome);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
txtNome = 10;
console.log(typeof (txtNome));
console.log(txtNome);

new Promise(function (resolve) {
        readline.question('Digite seu nome', function (userInput) {
        console.log('Obrigado' + userInput);
        console.log('Obrigado por usar o app, finalizando ...')
        readline.close();
        });
    });
}

main();
console.log('main ja encerrou...');
console.log(txtNome);
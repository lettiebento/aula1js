alert('Seja bem-vindo ao nosso jogo!');
alert('Vamos ao calculo de média!');

let tamanho;
let nota;
let media = 0;
tamanho = parseInt(prompt('Quantas notas você quer inserir?'));
for (x = 0; x < tamanho; x++) {
    nota = parseFloat(prompt('Digite a nota ' + (x + 1) + ':'));
    if (nota < 0 || nota > 10) {
        alert('Nota inválida! Digite uma nota entre 0 e 10.');
        x--; 
    } else {
        console.log('Nota ' + (x + 1) + ': ' + nota);
    }
    media += nota;
}
alert('Média: ' + (media / tamanho).toFixed(2));

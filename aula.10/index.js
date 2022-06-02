// Operando números:

let numero1 = 3;
let numero2 = 6;

function print(variavel = String) {
    console.log(variavel);
}

// Soma
totalSoma = numero1 + numero2;
print(totalSoma);

// Concatenação
concat = (numero1+numero2)+ ' Número da sorte.';
print(concat);

// Subtração
totalSub = numero1 - numero2;
print(totalSub);

// Divisão
totalDiv = numero2 / numero1;
print(totalDiv);

//Resto da Divisão
totalResto = numero1 % numero2;
print(totalResto);

// Potenciação
totalPot = numero1 ** numero2;
print(totalPot);

// Incremento
numero1 += numero2; // Atribui ao valor à esquerda a soma dele mesmo com o valor da direita
print(numero1);

// Decremento
numero1 -= numero2; // Atribui ao valor à esquerda a subtração dele mesmo com o valor da direita
print(numero1);

// Erro NaN
erro = numero1 * 'nome';
print(erro);

// Conversão de valores
print(numero1 + parseInt('6.9')); // Converte o valor da string para inteiro, desnconsiderando os decimais.
print(numero1 + parseFloat('6.9')); // Converte o valor da string para foat, considerando os decimais.
print(numero1 + Number('6.9')); // Converte o valor da string para o tipo adequado ao valor da string.

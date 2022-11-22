/*Nome Sobrenome tem idade anos, pesa peso kg 
tem altura de altura e seu IMC é de IMC
Nome nasceu em anoNascimento.
*/

const nome = 'Felipe';
const sobrenome = 'Passos';
const idade = 31;
const peso = 62;
const altura = 1.83;
let IMC;
let anoNascimento;

IMC = peso / (altura * altura)
anoNascimento = 2022 - idade

console.log(`${nome}, ${sobrenome} tem ${idade} anos, pesa ${peso} Kg\ntem ${altura} de altura e seu IMC é de ${IMC}`);
console.log(nome, 'nasceu em', anoNascimento+'.') //Quando concatenamos os dados em uma string com ',' o js irá acrescer um espaço por padrão ao final da variável.
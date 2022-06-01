var nome1 = 'felipe'; // Cria uma variável e permite que a mesma seja declarada novamente no decorrer do cód.
var nome1 = 'Felipe'; // Redeclara a variável referida.
let sobrenome; // Cria uma variável única e impede que essa variável seja redeclarada no decorrer do do mesmo escopo.
sobrenome = 'Passos'; // Atribui valor à variável criada em let.
let nomesobrenome = 'Felipe Passos'; // Não recomendado por criar uma váriavel global não declarada.

function NomeSobrenome(nome, sobrenome) {
    console.log(nome, sobrenome);   
} /* Teste de declaração de função (aula.31)*/

NomeSobrenome('Felipe', 'Passos');

console.log(nomesobrenome);

let nome = undefined;
/*const pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'Passos',
    idade: 32
};*/

function pessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

let pessoa1 = pessoa('Felipe', 'Passos', '32');

console.log(pessoa1.nome);


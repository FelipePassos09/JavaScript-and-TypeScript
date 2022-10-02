let varA = 'A';
let varB = 'B';
let varC = 'C';

/*const tempvarA = varA
varA = varB
varB = varC
varC = tempvarA*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
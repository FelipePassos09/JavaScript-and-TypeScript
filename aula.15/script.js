let newArray = [];

for (var i = 0; i < 10; i++) {
    newArray.push(`valor${i}`)
}

//console.log(newArray.slice(0, -5))

console.log(newArray instanceof Array)

let ola = n => `Olá ${n}.`;

console.log(ola('Felipe'))
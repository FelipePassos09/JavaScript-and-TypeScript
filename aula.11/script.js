let operation = prompt('Selecione uma operação:\nS para soma\nM para multiplicação\nD para divisão');
let num1 = prompt('Informe um número:')
let num2 = prompt('Informe outro número:')

if (operation == 'S'){
    num1 = Number(num1)
    num2 = Number(num2)
    alert(`A soma dos dois valores é: ${num1+num2}`)
}

if (operation == 'M'){
    num1 = Number(num1)
    num2 = Number(num2)
    alert(`O produto dos dois valores é: ${num1*num2}`)
}

if (operation == 'D'){
    num1 = Number(num1)
    num2 = Number(num2)
    alert(`O coeficiente dos dois valores é: ${(num1/num2)}`)
}
const form = document.querySelector('.data');



form.addEventListener('submit', function (ev) {
  ev.preventDefault();

  const inputPeso = ev.target.querySelector('#peso');
  const inputAltura = ev.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (peso === 0 && altura === 0) {
    setResult('Precisa inserir algum valor', false)
  }
  else if (!peso || peso === 0){
    setResult('Peso inválido', false);
  }
  else if (!altura || altura === 0){
    setResult('Altura inválida', false);
  }
  else{
    setResult(`Seu IMC é ${IMC(peso, altura)} e seu nível é ${nivelIMC(IMC(peso, altura))}`, true);

    if (IMC(peso, altura) >= 30){
        window.alert('Procure um médico!!')
    }
  }

  
});

function setResult(msg, isValid) {
    const result = document.querySelector('.queryResult')
    
    const p = newP()

    if (isValid) {        
        p.classList.add('saidaImc')
    } else {
        p.classList.add('erroValor')
    }

    result.innerHTML = '';
    p.innerHTML = msg;
    result.appendChild(p);
}

function IMC (peso, altura) {
    return Number((Number(peso) / Math.pow(Number(altura),2)).toFixed(1));
}

function nivelIMC(IMC) {
    const nivel = [
        'Abaixo do peso.',
        'Peso normal.',
        'Sobrepeso.',
        'Obesidade grau 1.',
        'Obesidade grau 2.',
        'Obesidade grau 3.'
    ];

    if (IMC >= 39.9) return nivel[5]
    if (IMC >= 34.9) return nivel[4]
    if (IMC >= 29.9) return nivel[3]
    if (IMC >= 24.9) return nivel[2]
    if (IMC >= 18.5) return nivel[1]
    if (IMC < 18.5) return nivel[0]  
}

function newP(){
    const p = document.createElement('p');
    return p;
}
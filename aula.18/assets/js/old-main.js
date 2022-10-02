function allScope() {
    const container = document.querySelector('.container');
    const resultado = document.querySelector('.queryResult');
    const form = document.querySelector('.data');
    
    form.onsubmit = function(event){
        event.preventDefault();
    };

    function recebeDados(event){
        event.preventDefault();

        const peso = event.target.querySelector('#peso');
        const altura = event.target.querySelector('#altura');

        if (isNaN(peso)){
            resultado.innerHTML = ''
            const p = criaP('erroValor');
            p.innerHTML = 'Valor para peso não aceito';
            return
        }

        else if (isNaN(altura)){
            resultado.innerHTML = ''
            const p = criaP('erroValor');
            p.innerHTML = 'Valor para altura não aceito';
            return
        }
        else {
            const p = criaP('saidaImc');
            resultado.innerHTML = '';
            p.innerHTML = `O seu IMC é ${calculaIMC(peso, altura)}`;
            resultado.appendChild(p)
            return
        }
    };

    form.addEventListener('submit', recebeDados);
    
    
};

function criaP(classe){
    const p = document.createElement('p');
    p.classList.add(classe);
    return p
}

function setResultado(msg, isValid, classe) {
    const resultado = resultado.querySelector( '.queryResult');
    resultado.innerHTML = '';

    const p = criaP(classe);
}

function calculaIMC(peso, altura){
    const result = Number(peso.value) / Math.pow(Number(altura.value), 2)
    return result
};

function isValid(value){
    if (value == true) {
        return 'saidaImc'
    }

    else {
        return 'erroValor'
    }
}

allScope();